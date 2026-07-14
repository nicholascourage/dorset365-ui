<template>
   <section id="common_banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_bannner_text">
                        <h2>Hotel details</h2>
                        <ul>
                            <li><NuxtLink to="/">Home</NuxtLink>
</li>
                            <li><span><i class="fas fa-circle"></i></span><NuxtLink to="/hotels">Hotel</NuxtLink></li>
                            <li><span><i class="fas fa-circle"></i></span> Hotel Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: "HotelDetailBanner"
};
</script>