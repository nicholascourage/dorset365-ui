<template>

    <!-- Common Banner Area -->
    <TourBookingBanner />

    <!-- Dashboard Area -->
    <TourBookingDashboard />

    <!-- Cta Area -->
    <Cta />

</template>
<script setup>
definePageMeta({
    middleware: ['sanctum:auth'],
})
</script>

<script>

import TourBookingBanner from '@/components/dashboard/TourBookingBanner.vue'
import TourBookingDashboard from '@/components/dashboard/TourBookingDashboard.vue'
import Cta from '@/components/home/Cta.vue'

export default {
    name: "TourBookingView",
    components: {
        TourBookingBanner, TourBookingDashboard, Cta
    }
};
</script>
