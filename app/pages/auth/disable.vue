<template>
    <section id="common_banner">
        <div class="container">
            <div class="common_bannner_text">
                <h2>Disable two-factor authentication</h2>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><span><i class="fas fa-circle"></i></span> Two-factor authentication</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="two_factor_area section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="two_factor_card two_factor_card_danger">
                        <div class="two_factor_icon" aria-hidden="true"><i class="fas fa-unlock-alt"></i></div>
                        <div class="common_author_heading">
                            <h3>Account security</h3>
                            <h2>Turn off two-factor authentication?</h2>
                            <p>Your account will only be protected by your password. You can enable two-factor authentication again at any time.</p>
                        </div>

                        <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>

                        <div class="two_factor_warning">
                            <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                            <p>This also invalidates your current recovery codes.</p>
                        </div>

                        <form class="two_factor_form password_confirmation_form" @submit.prevent="disableTwoFactor">
                            <label for="disable-password">Confirm your password</label>
                            <p class="two_factor_field_hint">Enter your current password to confirm this security change.</p>
                            <div class="password_input_wrap">
                                <input id="disable-password" v-model="password" class="form-control"
                                    :type="showPassword ? 'text' : 'password'" autocomplete="current-password"
                                    placeholder="Current password" required>
                                <button type="button" :aria-label="showPassword ? 'Hide password' : 'Show password'"
                                    @click="showPassword = !showPassword">
                                    <i class="fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                </button>
                            </div>
                            <small v-if="passwordError" class="text-danger">{{ passwordError }}</small>
                            <div class="two_factor_actions">
                                <NuxtLink class="btn btn_border btn_md" to="/dashboard/profile">Keep it enabled</NuxtLink>
                                <button class="btn btn-danger btn_md" type="submit" :disabled="isLoading || !password">
                                    {{ isLoading ? 'Confirming...' : 'Confirm and disable' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
definePageMeta({ middleware: ['sanctum:auth', 'two-factor-enabled'] })
useHead({ title: 'Disable two-factor authentication' })

const sanctumClient = useSanctumClient()
const password = ref('')
const showPassword = ref(false)
const passwordError = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const disableTwoFactor = async () => {
    errorMessage.value = ''
    passwordError.value = ''
    isLoading.value = true
    try {
        await sanctumClient('/user/confirm-password', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: { password: password.value },
        })
        await sanctumClient('/user/two-factor-authentication', {
            method: 'DELETE',
            headers: { Accept: 'application/json' },
        })
        await navigateTo('/dashboard/profile?two-factor=disabled')
    } catch (error) {
        passwordError.value = error?.data?.errors?.password?.[0] || ''
        errorMessage.value = passwordError.value ? '' : (error?.data?.message || error?.message || 'Two-factor authentication could not be disabled. Please try again.')
    } finally {
        isLoading.value = false
    }
}
</script>
