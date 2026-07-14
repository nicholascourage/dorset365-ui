<template>
    <section id="common_banner">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_bannner_text">
                        <h2>Room details</h2>
                        <ul>
                            <li><NuxtLink to="/">Home</NuxtLink>
                            </li>
                            <li><span><i class="fas fa-circle"></i></span><NuxtLink to="/hotels">Hotel</NuxtLink></li>
                            <li><span><i class="fas fa-circle"></i></span><NuxtLink to="/hotels/details">Hotel details</NuxtLink>
                            </li>
                            <li><span><i class="fas fa-circle"></i></span> Room details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
    name: "RoomBanner"
};
</script>