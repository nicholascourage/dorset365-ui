<template>

    <section id="top_tour_packages" class="section_padding_bottom">
        <div class="container">
            <!-- Section Heading -->
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-12">
                    <div class="section_heading_center">
                        <h2>Top tour packages</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="promotional_tour_slider owl-theme owl-carousel dot_style">

                        <swiper :modules="swiperModules" :slides-per-view="4" :space-between="20" :pagination="{ clickable: true }" >
                            <swiper-slide>
                                <div class="theme_common_box_two">
                                    <div class="theme_two_box_img">
                                        <NuxtLink to="/tours/details"><img src="../../assets/img/tab-img/hotel1.png"
                                                alt="img"></NuxtLink>
                                        <p><i class="fas fa-map-marker-alt"></i>New beach, Thailand</p>
                                    </div>
                                    <div class="theme_two_box_content">
                                        <h4><NuxtLink to="/tours/details">Kantua hotel, Thailand</NuxtLink></h4>
                                        <p><span class="review_rating">4.8/5 Excellent</span> <span
                                                class="review_count">(1214
                                                reviewes)</span></p>
                                        <h3>$99.00 <span>Price starts from</span></h3>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="theme_common_box_two">
                                    <div class="theme_two_box_img">
                                        <NuxtLink to="/tours/details"><img src="../../assets/img/tab-img/hotel2.png"
                                                alt="img"></NuxtLink>
                                        <p><i class="fas fa-map-marker-alt"></i>Indonesia</p>
                                        <div class="discount_tab">
                                            <span>50%</span>
                                        </div>

                                    </div>
                                    <div class="theme_two_box_content">
                                        <h4><NuxtLink to="/tours/details">Hotel paradise international</NuxtLink></h4>
                                        <p><span class="review_rating">4.8/5 Excellent</span> <span
                                                class="review_count">(1214
                                                reviewes)</span></p>
                                        <h3>$99.00 <span>Price starts from</span></h3>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="theme_common_box_two">
                                    <div class="theme_two_box_img">
                                        <NuxtLink to="/tours/details"><img src="../../assets/img/tab-img/hotel3.png"
                                                alt="img"></NuxtLink>
                                        <p><i class="fas fa-map-marker-alt"></i>Kualalampur</p>
                                    </div>
                                    <div class="theme_two_box_content">
                                        <h4><NuxtLink to="/tours/details">Hotel kualalampur</NuxtLink></h4>
                                        <p><span class="review_rating">4.8/5 Excellent</span> <span
                                                class="review_count">(1214
                                                reviewes)</span></p>
                                        <h3>$99.00 <span>Price starts from</span></h3>
                                    </div>
                                </div>
                            </swiper-slide>

                            <swiper-slide>
                                <div class="theme_common_box_two">
                                    <div class="theme_two_box_img">
                                        <NuxtLink to="/tours/details"><img src="../../assets/img/tab-img/hotel4.png"
                                                alt="img"></NuxtLink>
                                        <p><i class="fas fa-map-marker-alt"></i>Mariana island</p>
                                        <div class="discount_tab">
                                            <span>50%</span>
                                        </div>
                                    </div>
                                    <div class="theme_two_box_content">
                                        <h4><NuxtLink to="/tours/details">Hotel deluxe</NuxtLink></h4>
                                        <p><span class="review_rating">4.8/5 Excellent</span> <span
                                                class="review_count">(1214
                                                reviewes)</span></p>
                                        <h3>$99.00 <span>Price starts from</span></h3>
                                    </div>
                                </div>
                            </swiper-slide>

                            <swiper-slide>
                                <div class="theme_common_box_two">
                                    <div class="theme_two_box_img">
                                        <NuxtLink to="/tours/details"><img src="../../assets/img/tab-img/hotel6.png"
                                                alt="img"></NuxtLink>
                                        <p><i class="fas fa-map-marker-alt"></i>Beach view</p>
                                    </div>
                                    <div class="theme_two_box_content">
                                        <h4><NuxtLink to="/tours/details">Thailand grand suit</NuxtLink></h4>
                                        <p><span class="review_rating">4.8/5 Excellent</span> <span
                                                class="review_count">(1214
                                                reviewes)</span></p>
                                        <h3>$99.00 <span>Price starts from</span></h3>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="theme_common_box_two">
                                    <div class="theme_two_box_img">
                                        <NuxtLink to="/tours/details"><img src="../../assets/img/tab-img/hotel7.png"
                                                alt="img"></NuxtLink>
                                        <p><i class="fas fa-map-marker-alt"></i>Long island</p>
                                    </div>
                                    <div class="theme_two_box_content">
                                        <h4><NuxtLink to="/tours/details">Zefi resort and spa</NuxtLink></h4>
                                        <p><span class="review_rating">4.8/5 Excellent</span> <span
                                                class="review_count">(1214
                                                reviewes)</span></p>
                                        <h3>$99.00 <span>Price starts from</span></h3>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default {
    name: "TopTourPackage",
    components: {
        Swiper,
        SwiperSlide,
    },

    data() {
        return {
            swiperModules: [Pagination],
            swiper: null,
        };
    }
};
</script>
