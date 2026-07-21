<template>
    <section id="common_banner">
        <div class="container">
            <div class="common_bannner_text">
                <h2>Enable two-factor authentication</h2>
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
                <div class="col-lg-8">
                    <div class="two_factor_card">
                        <div class="two_factor_icon" aria-hidden="true"><i class="fas fa-shield-alt"></i></div>
                        <div class="common_author_heading">
                            <h3>Account security</h3>
                            <h2>Protect your account</h2>
                            <p>Use an authenticator app to add an extra layer of security when you sign in.</p>
                        </div>

                        <div v-if="errorMessage" class="alert alert-danger" role="alert">{{ errorMessage }}</div>

                        <div v-if="!setupStarted" class="two_factor_intro">
                            <ul class="two_factor_steps">
                                <li><span>1</span>Start the secure setup.</li>
                                <li><span>2</span>Scan the QR code with your authenticator app.</li>
                                <li><span>3</span>Enter the six-digit code to finish.</li>
                            </ul>
                            <form class="two_factor_form password_confirmation_form" @submit.prevent="enableTwoFactor">
                                <label for="enable-password">Confirm your password</label>
                                <p class="two_factor_field_hint">For your security, enter your current password before continuing.</p>
                                <div class="password_input_wrap">
                                    <input id="enable-password" v-model="password" class="form-control"
                                        :type="showPassword ? 'text' : 'password'" autocomplete="current-password"
                                        placeholder="Current password" required>
                                    <button type="button" :aria-label="showPassword ? 'Hide password' : 'Show password'"
                                        @click="showPassword = !showPassword">
                                        <i class="fas" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
                                    </button>
                                </div>
                                <small v-if="passwordError" class="text-danger">{{ passwordError }}</small>
                                <button class="btn btn_theme btn_md" type="submit" :disabled="isLoading || !password">
                                    {{ isLoading ? 'Confirming...' : 'Confirm password and continue' }}
                                </button>
                            </form>
                        </div>

                        <div v-else class="two_factor_setup">
                            <div class="two_factor_qr" aria-label="Authenticator QR code" v-html="qrCode"></div>
                            <p class="two_factor_hint">Scan this QR code, then enter the code shown in your authenticator app.</p>

                            <form class="two_factor_form" @submit.prevent="confirmTwoFactor">
                                <label for="confirmation-code">Authentication code</label>
                                <input id="confirmation-code" v-model.trim="code" class="form-control two_factor_code"
                                    type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="6"
                                    placeholder="000000" required autofocus>
                                <small v-if="fieldError" class="text-danger">{{ fieldError }}</small>
                                <button class="btn btn_theme btn_md" type="submit" :disabled="isLoading || code.length !== 6">
                                    {{ isLoading ? 'Confirming...' : 'Confirm and enable' }}
                                </button>
                            </form>

                            <div v-if="recoveryCodes.length" class="recovery_codes">
                                <div>
                                    <h4>Save your recovery codes</h4>
                                    <p>Store these somewhere safe. Each code can be used once if you lose access to your authenticator.</p>
                                </div>
                                <code v-for="recoveryCode in recoveryCodes" :key="recoveryCode">{{ recoveryCode }}</code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
definePageMeta({ middleware: ['sanctum:auth', 'two-factor-disabled'] })
useHead({ title: 'Enable two-factor authentication' })

const sanctumClient = useSanctumClient()
const setupStarted = ref(false)
const qrCode = ref('')
const recoveryCodes = ref([])
const code = ref('')
const password = ref('')
const showPassword = ref(false)
const passwordError = ref('')
const fieldError = ref('')
const errorMessage = ref('')
const isLoading = ref(false)

const messageFrom = (error, fallback) => error?.data?.message || error?.message || fallback

const loadSetupDetails = async () => {
    const [qrResponse, recoveryResponse] = await Promise.all([
        sanctumClient('/user/two-factor-qr-code', { headers: { Accept: 'application/json' } }),
        sanctumClient('/user/two-factor-recovery-codes', { headers: { Accept: 'application/json' } }),
    ])
    qrCode.value = qrResponse?.svg || ''
    recoveryCodes.value = Array.isArray(recoveryResponse) ? recoveryResponse : []
}

const enableTwoFactor = async () => {
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
            method: 'POST',
            headers: { Accept: 'application/json' },
        })
        await loadSetupDetails()
        setupStarted.value = true
    } catch (error) {
        passwordError.value = error?.data?.errors?.password?.[0] || ''
        errorMessage.value = passwordError.value ? '' : messageFrom(error, 'Two-factor authentication could not be started. Please try again.')
    } finally {
        isLoading.value = false
    }
}

const confirmTwoFactor = async () => {
    fieldError.value = ''
    errorMessage.value = ''
    isLoading.value = true
    try {
        await sanctumClient('/user/confirmed-two-factor-authentication', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: { code: code.value },
        })
        await navigateTo('/dashboard/profile?two-factor=enabled')
    } catch (error) {
        fieldError.value = error?.data?.errors?.code?.[0] || messageFrom(error, 'That code was not accepted. Please try again.')
    } finally {
        isLoading.value = false
    }
}
</script>
