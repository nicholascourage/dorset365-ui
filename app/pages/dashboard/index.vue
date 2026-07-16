<template>

    <!-- Common Banner Area -->
    <DashboardBanner />

    <!-- Dashboard Area -->
    <DashboardArea />

    <!-- Cta Area -->
    <Cta />


</template>
<script setup>
definePageMeta({
    middleware: ['sanctum:auth'],
})
</script>

<script>
import DashboardBanner from '@/components/dashboard/DashboardBanner.vue'
import DashboardArea from '@/components/dashboard/DashboardArea.vue'
import Cta from '@/components/home/Cta.vue'

export default {
    name: "DashboardView",
    components: {
        DashboardBanner, DashboardArea, Cta
    }
};
</script>
