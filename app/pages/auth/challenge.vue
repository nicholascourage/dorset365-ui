<template>
    <section id="common_banner">
        <div class="container">
            <div class="common_bannner_text">
                <h2>Security check</h2>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><span><i class="fas fa-circle"></i></span> Two-factor challenge</li>
                </ul>
            </div>
        </div>
    </section>

    <section class="two_factor_area section_padding">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-7">
                    <div class="two_factor_card">
                        <div class="two_factor_icon" aria-hidden="true"><i class="fas fa-mobile-alt"></i></div>
                        <div class="common_author_heading">
                            <h3>Two-factor authentication</h3>
                            <h2>Confirm it’s you</h2>
                            <p v-if="!usingRecoveryCode">Enter the six-digit code from your authenticator app.</p>
                            <p v-else>Enter one of the recovery codes you saved when setting up two-factor authentication.</p>
                        </div>

                        <form class="two_factor_form" @submit.prevent="submitChallenge">
                            <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>

                            <template v-if="!usingRecoveryCode">
                                <label for="challenge-code">Authentication code</label>
                                <input id="challenge-code" v-model.trim="code" class="form-control two_factor_code"
                                    type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6"
                                    placeholder="000000" required autofocus>
                            </template>
                            <template v-else>
                                <label for="recovery-code">Recovery code</label>
                                <input id="recovery-code" v-model.trim="recoveryCode" class="form-control"
                                    type="text" autocomplete="one-time-code" placeholder="Enter a recovery code" required autofocus>
                            </template>

                            <small v-if="fieldError" class="text-danger">{{ fieldError }}</small>
                            <button class="btn btn_theme btn_md" type="submit" :disabled="isLoading">
                                {{ isLoading ? 'Verifying...' : 'Verify and continue' }}
                            </button>
                            <button class="two_factor_switch" type="button" @click="switchMethod">
                                {{ usingRecoveryCode ? 'Use an authentication code' : 'Use a recovery code instead' }}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
definePageMeta({ middleware: ['sanctum:guest'] })
useHead({ title: 'Two-factor authentication challenge' })

const sanctumClient = useSanctumClient()
const { refreshIdentity } = useSanctumAuth()
const route = useRoute()
const code = ref('')
const recoveryCode = ref('')
const usingRecoveryCode = ref(false)
const fieldError = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const switchMethod = () => {
    usingRecoveryCode.value = !usingRecoveryCode.value
    fieldError.value = ''
    errorMessage.value = ''
}

const submitChallenge = async () => {
    fieldError.value = ''
    errorMessage.value = ''
    isLoading.value = true
    const field = usingRecoveryCode.value ? 'recovery_code' : 'code'
    try {
        await sanctumClient('/two-factor-challenge', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: { [field]: usingRecoveryCode.value ? recoveryCode.value : code.value },
        })
        await refreshIdentity()
        await navigateTo(typeof route.query.redirect === 'string' ? route.query.redirect : '/dashboard')
    } catch (error) {
        fieldError.value = error?.data?.errors?.[field]?.[0] || ''
        errorMessage.value = fieldError.value ? '' : (error?.data?.message || error?.message || 'The supplied code was not accepted.')
    } finally {
        isLoading.value = false
    }
}
</script>
