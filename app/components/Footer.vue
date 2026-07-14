<template>
    <div>
        <footer id="footer_area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div class="footer_heading_area">
                            <h5>Need any help?</h5>
                        </div>
                        <div class="footer_first_area">
                            <div class="footer_inquery_area">
                                <h5>Call 24/7 for any help</h5>
                                <h3> <a href="tel:+00-123-456-789">+00 123 456 789</a></h3>
                            </div>
                            <div class="footer_inquery_area">
                                <h5>Mail to our support team</h5>
                                <h3> <a href="mailto:support@domain.com">support@domain.com</a></h3>
                            </div>
                            <div class="footer_inquery_area">
                                <h5>Follow us on</h5>
                                <ul class="soical_icon_footer">
                                    <li><a href="#!"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-twitter-square"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#!"><i class="fab fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-2 offset-lg-1 col-md-6 col-sm-6 col-12">
                        <div class="footer_heading_area">
                            <h5>Company</h5>
                        </div>
                        <div class="footer_link_area">
                            <ul>
                                <li><NuxtLink to="/company/about">About Us</NuxtLink></li>
                                <li><NuxtLink to="/company/testimonials">Testimonials</NuxtLink></li>
                                <li><NuxtLink to="/support/faqs">Rewards</NuxtLink></li>
                                <li><NuxtLink to="/legal/terms-service">Work with Us</NuxtLink></li>
                                <li><NuxtLink to="/tours/guides">Meet the Team </NuxtLink></li>
                                <li><NuxtLink to="/news">Blog</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="footer_heading_area">
                            <h5>Support</h5>
                        </div>
                        <div class="footer_link_area">
                            <ul>
                                <li><NuxtLink to="/dashboard">Account</NuxtLink></li>
                                <li><NuxtLink to="/support/faqs">Faq</NuxtLink></li>
                                <li><NuxtLink to="/company/testimonials">Legal</NuxtLink></li>
                                <li><NuxtLink to="/company/contact">Contact</NuxtLink></li>
                                <li><NuxtLink to="/destinations"> Affiliate Program</NuxtLink></li>
                                <li><NuxtLink to="/legal/privacy-policy">Privacy Policy</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="footer_heading_area">
                            <h5>Other Services</h5>
                        </div>
                        <div class="footer_link_area">
                            <ul>
                                <li><NuxtLink to="/destinations/details">Community program</NuxtLink></li>
                                <li><NuxtLink to="/destinations/details">Investor Relations</NuxtLink></li>
                                <li><NuxtLink to="/flights/search-results">Rewards Program</NuxtLink></li>
                                <li><NuxtLink to="/hotels/rooms/booking">PointsPLUS</NuxtLink></li>
                                <li><NuxtLink to="/company/testimonials">Partners</NuxtLink></li>
                                <li><NuxtLink to="/hotels">List My Hotel</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-12">
                        <div class="footer_heading_area">
                            <h5>Top cities</h5>
                        </div>
                        <div class="footer_link_area">
                            <ul>
                                <li><NuxtLink to="/hotels/rooms/details">Chicago</NuxtLink></li>
                                <li><NuxtLink to="/hotels/details">New York</NuxtLink></li>
                                <li><NuxtLink to="/dashboard/bookings/hotels">San Francisco</NuxtLink></li>
                                <li><NuxtLink to="/tours">California</NuxtLink></li>
                                <li><NuxtLink to="/dashboard/bookings/tours">Ohio </NuxtLink></li>
                                <li><NuxtLink to="/tours/guides">Alaska</NuxtLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div class="copyright_area">
            <div class="container">
                <div class="row align-items-center">
                    <div class="co-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="copyright_left">
                            <p>Copyright © 2022 All Rights Reserved</p>
                        </div>
                    </div>
                    <div class="co-lg-6 col-md-6 col-sm-12 col-12">
                        <div class="copyright_right">
                            <img src="../assets/img/common/cards.png" alt="img">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'Footer'
}
</script>
