<template>
    <section id="dashboard_main_arae" class="section_padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="dashboard_sidebar">
                        <div class="dashboard_sidebar_user">
                            <img src="../../assets/img/common/dashboard-user.png" alt="img">
                            <h3>Sherlyn Chopra</h3>
                            <p><a href="tel:+00-123-456-789">+00 123 456 789</a></p>
                            <p><a href="mailto:sherlyn@domain.com">sherlyn@domain.com</a></p>
                        </div>
                        <div class="dashboard_menu_area">
                            <ul>
                                <li><NuxtLink to="/dashboard"><i
                                            class="fas fa-tachometer-alt"></i>Dashboard</NuxtLink></li>
                                <MyBookingOption />
                                <li><NuxtLink to="/dashboard/profile" class="active"><i class="fas fa-user-circle"></i>My
                                        profile</NuxtLink></li>
                                <li><NuxtLink to="/dashboard/wallet"><i class="fas fa-wallet"></i>Wallet</NuxtLink>
                                </li>
                                <li><NuxtLink to="/dashboard/notifications"><i
                                            class="fas fa-bell"></i>Notifications</NuxtLink></li>
                                <LogoutBtn />
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="dashboard_common_table">
                        <h3>My Profile</h3>
                        <div class="profile_update_form">
                            <form action="!#" id="profile_form_area">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="f-name">First name</label>
                                            <input type="text" class="form-control" id="f-name" placeholder="Your Name"
                                                value="Sherlyn">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="l-name">Last name</label>
                                            <input type="text" class="form-control" id="l-name" value="chopra">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="mail-address">Email address</label>
                                            <input type="text" class="form-control" id="mail-address"
                                                value="sherlyn@domain.com">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="mobil-number">Mobile number</label>
                                            <input type="text" class="form-control" id="mobil-number"
                                                value="+00 123 456 789">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label for="u-name">User name</label>
                                            <input type="text" class="form-control" id="u-name" value="sherlyn">
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group change_password_field">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" id="password" value="cdkdkdd">
                                            <p>Change password</p>
                                        </div>
                                    </div>
                                    <div class="change_password_input_boxed">
                                        <h3>Change password</h3>
                                        <div class="row">
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <input type="password" class="form-control"
                                                        placeholder="Old Password">
                                                </div>
                                            </div>
                                            <div class="col-lg-6">
                                                <div class="form-group">
                                                    <input type="password" class="form-control"
                                                        placeholder="New Password">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="dashboard_common_table profile_security_card">
                        <div class="profile_security_heading">
                            <div>
                                <span class="profile_security_label">Account security</span>
                                <h3>Two-factor authentication</h3>
                            </div>
                            <span class="two_factor_status" :class="isTwoFactorEnabled ? 'is-enabled' : 'is-disabled'">
                                <i class="fas" :class="isTwoFactorEnabled ? 'fa-check-circle' : 'fa-minus-circle'"></i>
                                {{ isTwoFactorEnabled ? 'Enabled' : 'Not enabled' }}
                            </span>
                        </div>

                        <div v-if="statusMessage" class="alert" :class="statusMessage.type" role="status">
                            {{ statusMessage.text }}
                        </div>

                        <div class="profile_security_content">
                            <div class="profile_security_icon" aria-hidden="true">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div>
                                <p v-if="isTwoFactorEnabled">
                                    Your account requires a code from your authenticator app when you sign in.
                                </p>
                                <p v-else>
                                    Add an extra security check to protect your account if your password is compromised.
                                </p>
                                <NuxtLink v-if="isTwoFactorEnabled" class="btn btn_border btn_md" to="/auth/disable">
                                    Manage two-factor authentication
                                </NuxtLink>
                                <NuxtLink v-else class="btn btn_theme btn_md" to="/auth/enable">
                                    Enable two-factor authentication
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const route = useRoute()
const user = useSanctumUser()

const isTwoFactorEnabled = computed(() => {
    if (route.query['two-factor'] === 'enabled') return true
    if (route.query['two-factor'] === 'disabled') return false

    return Boolean(user.value?.two_factor_confirmed_at || user.value?.two_factor_enabled)
})

const statusMessage = computed(() => {
    const status = route.query['two-factor']

    if (status === 'enabled') {
        return { type: 'alert-success', text: 'Two-factor authentication is now enabled.' }
    }
    if (status === 'disabled') {
        return { type: 'alert-success', text: 'Two-factor authentication has been disabled.' }
    }
    if (status === 'already-enabled') {
        return { type: 'alert-info', text: 'Two-factor authentication is already enabled.' }
    }
    if (status === 'not-enabled') {
        return { type: 'alert-info', text: 'Two-factor authentication is not currently enabled.' }
    }

    return null
})
</script>

<script>
import LogoutBtn from '@/components/dashboard/LogoutBtn.vue'
import MyBookingOption from '@/components/dashboard/MyBookingOption.vue'
export default {
    name: "ProfileDashboard",
    components: {
        LogoutBtn, MyBookingOption
    }
};
</script>
