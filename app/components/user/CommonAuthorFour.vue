<template>

    <section id="common_author_area" class="section_padding login_author_area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="common_author_boxed login_author_boxed">
                        <div class="common_author_heading">
                            <h1>
                                <span>Account Login</span>
                            </h1>
                        </div>
                        <div class="common_author_form">
                            <form id="main_author_form" @submit.prevent="submitLogin">
                                <div v-if="errorMessage" class="alert alert-danger" role="alert">
                                    {{ errorMessage }}
                                </div>
                                <div class="form-group">
                                    <input v-model.trim="form.email" type="email" class="form-control"
                                        placeholder="Enter email address" autocomplete="email" required />
                                    <small v-if="fieldErrors.email" class="text-danger">{{ fieldErrors.email }}</small>
                                </div>
                                <div class="form-group">
                                    <input v-model="form.password" type="password" class="form-control"
                                        placeholder="Enter password" autocomplete="current-password" required />
                                    <small v-if="fieldErrors.password" class="text-danger">{{ fieldErrors.password }}</small>
                                    <NuxtLink to="/auth/forgot-password">Forgot password?</NuxtLink>
                                </div>
                                <div class="common_form_submit">
                                    <button class="btn btn_theme btn_md auth_submit_button" type="submit"
                                        :disabled="isSubmitting"
                                        :aria-label="isSubmitting ? 'Logging in' : 'Login'">
                                        <span v-if="isSubmitting" class="auth_progress_spinner" aria-hidden="true"></span>
                                        <template v-else>
                                            <span>Login</span>
                                            <i class="fas fa-sign-in-alt" aria-hidden="true"></i>
                                        </template>
                                    </button>
                                </div>
                                <div class="have_acount_area">
                                    <p>Dont have an account? <NuxtLink to="/auth/register">Register now</NuxtLink></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script setup>
defineOptions({
    name: 'CommonAuthorFour',
})

const sanctumClient = useSanctumClient()
const { refreshIdentity } = useSanctumAuth()
const route = useRoute()

const form = reactive({
    email: '',
    password: '',
})

const fieldErrors = reactive({})
const errorMessage = ref('')
const isSubmitting = ref(false)

const clearFieldErrors = () => {
    Object.keys(fieldErrors).forEach((key) => {
        delete fieldErrors[key]
    })
}

const setFieldErrors = (errors = {}) => {
    clearFieldErrors()

    Object.entries(errors).forEach(([field, messages]) => {
        fieldErrors[field] = Array.isArray(messages) ? messages[0] : messages
    })
}

const getErrorMessage = (error) => {
    if (error?.data?.message) {
        return error.data.message
    }

    if (error?.message) {
        return error.message
    }

    return 'Login failed. Please check your browser Network tab for the Laravel Sanctum response.'
}

const submitLogin = async () => {
    clearFieldErrors()
    errorMessage.value = ''
    isSubmitting.value = true

    try {
        const response = await sanctumClient('/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: {
                email: form.email,
                password: form.password,
            },
        })

        if (response?.two_factor) {
            await navigateTo({
                path: '/auth/challenge',
                query: route.query.redirect ? { redirect: route.query.redirect } : undefined,
            })
            return
        }

        await refreshIdentity()
        await navigateTo(typeof route.query.redirect === 'string' ? route.query.redirect : '/dashboard')
    } catch (error) {
        const data = error?.data || {}
        setFieldErrors(data.errors)
        errorMessage.value = getErrorMessage(error)
    } finally {
        isSubmitting.value = false
    }
}
</script>
