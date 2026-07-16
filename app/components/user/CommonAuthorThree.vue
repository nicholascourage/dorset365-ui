<template>
    <section id="common_author_area" class="section_padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="common_author_boxed">
                        <div class="common_author_heading">
                            <h3>Register account</h3>
                            <h2>Register your account</h2>
                        </div>
                        <div class="common_author_form">
                            <form id="main_author_form" @submit.prevent="register">
                                <div v-if="successMessage" class="alert alert-success" role="alert">
                                    {{ successMessage }}
                                </div>
                                <div v-if="errorMessage" class="alert alert-danger" role="alert">
                                    {{ errorMessage }}
                                </div>
                                <div class="form-group">
                                    <input v-model.trim="form.firstName" type="text" class="form-control"
                                        placeholder="Enter first name*" autocomplete="given-name" required />
                                    <small v-if="fieldErrors.name" class="text-danger">{{ fieldErrors.name }}</small>
                                </div>
                                <div class="form-group">
                                    <input v-model.trim="form.lastName" type="text" class="form-control"
                                        placeholder="Enter last name*" autocomplete="family-name" required />
                                </div>
                                <div class="form-group">
                                    <input v-model.trim="form.email" type="email" class="form-control"
                                        placeholder="Your email address*" autocomplete="email" required />
                                    <small v-if="fieldErrors.email" class="text-danger">{{ fieldErrors.email }}</small>
                                </div>
                                <div class="form-group">
                                    <input v-model="form.password" type="password" class="form-control"
                                        placeholder="Password*" autocomplete="new-password" required />
                                    <small v-if="fieldErrors.password" class="text-danger">{{ fieldErrors.password }}</small>
                                </div>
                                <div class="form-group">
                                    <input v-model="form.password_confirmation" type="password" class="form-control"
                                        placeholder="Confirm password*" autocomplete="new-password" required />
                                </div>
                                <div class="common_form_submit">
                                    <button class="btn btn_theme btn_md" type="submit" :disabled="isSubmitting">
                                        {{ isSubmitting ? 'Registering...' : 'Register' }}
                                    </button>
                                </div>
                                <div class="have_acount_area other_author_option">
                                    <div class="line_or">
                                        <span>or</span>
                                    </div>
                                    <ul>
                                        <li><a href="#!"><img src="../../assets/img/icon/google.png" alt="icon"></a></li>
                                        <li><a href="#!"><img src="../../assets/img/icon/facebook.png" alt="icon"></a></li>
                                        <li><a href="#!"><img src="../../assets/img/icon/twitter.png" alt="icon"></a></li>
                                    </ul>
                                    <p>Already have an account? <NuxtLink to="/auth/login">Log in now</NuxtLink></p>
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
    name: 'CommonAuthorThree',
})

const sanctumClient = useSanctumClient()

const form = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const fieldErrors = reactive({})
const errorMessage = ref('')
const successMessage = ref('')
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

const register = async () => {
    clearFieldErrors()
    errorMessage.value = ''
    successMessage.value = ''
    isSubmitting.value = true

    try {
        await sanctumClient('/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: {
                name: `${form.firstName} ${form.lastName}`.trim(),
                email: form.email,
                password: form.password,
                password_confirmation: form.password_confirmation,
            },
        })

        successMessage.value = 'Registration successful. Redirecting to login...'
        await navigateTo('/auth/login')
    } catch (error) {
        const data = error?.data || {}
        setFieldErrors(data.errors)
        errorMessage.value = data.message || 'Registration failed. Please check your details and try again.'
    } finally {
        isSubmitting.value = false
    }
}
</script>
