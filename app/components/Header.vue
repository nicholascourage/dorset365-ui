<template>
    <div>
        <header class="main_header_arae">
            <!-- Top Bar -->
            <div class="topbar-area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6">
                            <ul class="topbar-list">
                                <li>
                                    <a href="#!"><i class="fab fa-facebook"></i></a>
                                    <a href="#!"><i class="fab fa-twitter-square"></i></a>
                                    <a href="#!"><i class="fab fa-instagram"></i></a>
                                    <a href="#!"><i class="fab fa-linkedin"></i></a>
                                </li>
                                <li><a href="#!"><span>+011 234 567 89</span></a></li>
                                <li><a href="#!"><span>contact@domain.com</span></a></li>
                            </ul>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <ul class="topbar-others-options">
                                <li><NuxtLink to="/auth/login">Login</NuxtLink></li>
                                <li><NuxtLink to="/auth/register">Sign up</NuxtLink></li>
                                <li>
                                    <div class="dropdown language-option">
                                        <select v-model="language">
                                            <option value="English">English</option>
                                            <option value="Arabic">Arabic</option>
                                            <option value="French">French</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div class="dropdown language-option">

                                        <select v-model="currency">
                                            <option value="USD">USD</option>
                                            <option value="BD">BD</option>
                                            <option value="URO">URO</option>
                                        </select>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navbar Bar -->
            <div class="navbar-area" :class="{ 'is-sticky': isSticky }">
                <div class="main-responsive-nav">
                    <div class="container">
                        <div class="main-responsive-menu mean-container">
                            <nav class="navbar">
                                <div class="container">
                                    <div class="logo">
                                        <NuxtLink to="/">
                                            <img src="../assets/img/logo.png" alt="logo">
                                        </NuxtLink>
                                    </div>
                                    <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbar-content">
                                        <div class="hamburger-toggle">
                                            <div class="hamburger">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </button>
                                    <div class="collapse navbar-collapse mean-nav" id="navbar-content">
                                        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
                                            <li class="nav-item dropdown">
                                                <NuxtLink to="/" class="dropdown-item dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside">Home</NuxtLink>
                                                <ul class="dropdown-menu shadow">
                                                    <li class="nav-item">
                                                        <NuxtLink to="/" class="dropdown-item">Home One</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/home/two" class="dropdown-item">Home
                                                            Two</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <NuxtLink to="/" class="dropdown-item dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside">Tours</NuxtLink>
                                                <ul class="dropdown-menu shadow">
                                                    <li class="nav-item">
                                                        <NuxtLink to="/tours"
                                                            class="dropdown-item">Tour</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/tours/details" class="dropdown-item">Tour
                                                            Details</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/tours/booking-submission"
                                                            class="dropdown-item">Tour
                                                            Booking</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/destinations" class="dropdown-item">Top
                                                            Destination</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <NuxtLink to="/" class="dropdown-item dropdown-toggle"
                                                    data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside">Flights</NuxtLink>
                                                <ul class="dropdown-menu shadow">
                                                    <li class="nav-item">
                                                        <NuxtLink to="/flights/search-results"
                                                            class="dropdown-item">Flight</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/flights/booking-submission"
                                                            class="dropdown-item">Flight
                                                            Booking</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <NuxtLink to="/" class="dropdown-item dropdown-toggle"
                                                    data-bs-toggle="dropdown" data-bs-auto-close="outside">Hotel
                                                </NuxtLink>
                                                <ul class="dropdown-menu shadow">
                                                    <li class="nav-item">
                                                        <NuxtLink to="/hotels"
                                                            class="dropdown-item">Hotel</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/hotels/details" class="dropdown-item">Hotel
                                                            Booking</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/hotels/rooms/details" class="dropdown-item">Room
                                                            Details</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/hotels/rooms/booking" class="dropdown-item">Room
                                                            Booking</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item dropdown">
                                                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                                    data-bs-auto-close="outside">Pages</a>
                                                <ul class="dropdown-menu shadow">

                                                    <li class="nav-item">
                                                        <NuxtLink to="/company/about"
                                                            class="dropdown-item">About</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/tours/guides"
                                                            class="dropdown-item">Team</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/company/testimonials"
                                                            class="dropdown-item">Testimonials</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/support/faqs" class="dropdown-item">FAQ</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/bookings/confirmation"
                                                            class="dropdown-item">Booking
                                                            Confirmation</NuxtLink>
                                                    </li>

                                                    <li class="dropend">
                                                        <a href="#" class="dropdown-item dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside">News</a>
                                                        <ul class="dropdown-menu shadow">

                                                            <li class="nav-item">
                                                                <NuxtLink to="/news"
                                                                    class="dropdown-item">News</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/news/v2" class="dropdown-item">News
                                                                    v2</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/news/details"
                                                                    class="dropdown-item">News
                                                                    Details</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropend">
                                                        <a href="#" class="dropdown-item dropdown-toggle"
                                                            data-bs-toggle="dropdown" data-bs-auto-close="outside">User
                                                            Pages</a>
                                                        <ul class="dropdown-menu shadow">

                                                            <li class="nav-item">
                                                                <NuxtLink to="/auth/login"
                                                                    class="dropdown-item">Login</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/auth/register"
                                                                    class="dropdown-item">Register</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/auth/forgot-password"
                                                                    class="dropdown-item">Forget
                                                                    Password</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/auth/verify-otp"
                                                                    class="dropdown-item">Verify
                                                                    OTP</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/auth/reset-password"
                                                                    class="dropdown-item">Reset
                                                                    Password</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="dropend">
                                                        <a href="#" class="dropdown-item dropdown-toggle"
                                                            data-bs-toggle="dropdown"
                                                            data-bs-auto-close="outside">Customer Dashboard</a>
                                                        <ul class="dropdown-menu shadow">

                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard"
                                                                    class="dropdown-item">Dashboard</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard/bookings/hotels"
                                                                    class="dropdown-item">Hotel
                                                                    booking</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard/bookings/flights"
                                                                    class="dropdown-item">Flight
                                                                    booking</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard/bookings/tours"
                                                                    class="dropdown-item">Tour
                                                                    booking</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard/bookings/history"
                                                                    class="dropdown-item">Booking
                                                                    history</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard/profile" class="dropdown-item">My
                                                                    profile</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard/wallet"
                                                                    class="dropdown-item">Wallet</NuxtLink>
                                                            </li>
                                                            <li class="nav-item">
                                                                <NuxtLink to="/dashboard/notifications"
                                                                    class="dropdown-item">Notifications</NuxtLink>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/legal/privacy-policy" class="dropdown-item">Privacy
                                                            Policy</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/error" class="dropdown-item">404
                                                            Error</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/company/contact" class="dropdown-item">Contact</NuxtLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="main-navbar">
                    <div class="container">
                        <nav class="navbar navbar-expand-md navbar-light">
                            <NuxtLink class="navbar-brand" to="/">
                                <img src="../assets/img/logo.png" alt="logo">
                            </NuxtLink>

                            <div class="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <NuxtLink to="/" class="nav-link active">
                                            Home
                                            <i class="fas fa-angle-down"></i>
                                        </NuxtLink>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/" class="nav-link">Home One</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/home/two" class="nav-link">Home Two</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Tours
                                            <i class="fas fa-angle-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/tours" class="nav-link">Tour</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/tours/details" class="nav-link">Tour
                                                    Details</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/tours/booking-submission" class="nav-link">Tour
                                                    Booking</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/destinations" class="nav-link">Top
                                                    Destination</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Flights
                                            <i class="fas fa-angle-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/flights/search-results"
                                                    class="nav-link">Flight</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/flights/booking-submission" class="nav-link">Flight
                                                    Booking</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Hotel
                                            <i class="fas fa-angle-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/hotels" class="nav-link">Hotel</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/hotels/details" class="nav-link">Hotel
                                                    Booking</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/hotels/rooms/details" class="nav-link">Room
                                                    Details</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/hotels/rooms/booking" class="nav-link">Room
                                                    Booking</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            Pages
                                            <i class="fas fa-angle-down"></i>
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li class="nav-item">
                                                <NuxtLink to="/company/about" class="nav-link">About</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/tours/guides" class="nav-link">Team</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/company/testimonials"
                                                    class="nav-link">Testimonials</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/support/faqs" class="nav-link">FAQ</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/bookings/confirmation" class="nav-link">Booking
                                                    Confirmation</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <a to="#" class="nav-link">News</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <NuxtLink to="/news" class="nav-link">News</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/news/v2" class="nav-link">News
                                                            v2</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/news/details" class="nav-link">News
                                                            Details</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a to="#" class="nav-link">User Pages</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <NuxtLink to="/auth/login" class="nav-link">Login</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/auth/register"
                                                            class="nav-link">Register</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/auth/forgot-password" class="nav-link">Forget
                                                            Password</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/auth/verify-otp" class="nav-link">Verify
                                                            OTP</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/auth/reset-password" class="nav-link">Reset
                                                            Password</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link">Customer Dashboard</a>
                                                <ul class="dropdown-menu">
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard"
                                                            class="nav-link">Dashboard</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard/bookings/hotels" class="nav-link">Hotel
                                                            booking</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard/bookings/flights" class="nav-link">Flight
                                                            booking</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard/bookings/tours" class="nav-link">Tour
                                                            booking</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard/bookings/history" class="nav-link">Booking
                                                            history</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard/profile" class="nav-link">My
                                                            profile</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard/wallet" class="nav-link">Wallet</NuxtLink>
                                                    </li>
                                                    <li class="nav-item">
                                                        <NuxtLink to="/dashboard/notifications"
                                                            class="nav-link">Notifications</NuxtLink>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/legal/privacy-policy" class="nav-link">Privacy
                                                    Policy</NuxtLink>
                                            </li>
                                            <li class="nav-item">
                                                <NuxtLink to="/error" class="nav-link">404 Error</NuxtLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/company/contact" class="nav-link">Contact</NuxtLink>
                                    </li>
                                </ul>
                                <div class="others-options d-flex align-items-center">
                                    <div class="option-item">
                                        <NuxtLink to="/company/become-vendor" class="btn  btn_navber">Become a
                                            partner</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="others-option-for-responsive">
                    <div class="container">
                        <div class="container">
                            <div class="option-inner">
                                <div class="others-options d-flex align-items-center">
                                    <div class="option-item">
                                        <a href="#" class="search-box"><i class="fas fa-search"></i></a>
                                    </div>
                                    <div class="option-item">
                                        <NuxtLink to="/company/contact" class="btn btn_navber">Get free quote</NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'Header',
    data() {
        return {
            language: 'English',
            currency: 'USD',
            isSticky: false,
        }
    },

    mounted() {
        window.addEventListener('scroll', () => {
            let scroll = window.scrollY
            if (scroll >= 200) {
                this.isSticky = true
            } else {
                this.isSticky = false
            }
        })

        document.addEventListener('click', function (e) {
            // Hamburger menu
            if (e.target.classList.contains('hamburger-toggle')) {
                e.target.children[0].classList.toggle('active');
            }
        })
    }
}
</script>

