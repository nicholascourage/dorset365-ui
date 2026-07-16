<template>

    <!-- Common Banner Area -->
    <MyProfileBanner />

    <!-- Dashboard Area -->
    <ProfileDashboard />

    <!-- Cta Area -->
    <Cta />

</template>
<script setup>
definePageMeta({
    middleware: ['sanctum:auth'],
})
</script>

<script>

import MyProfileBanner from '@/components/dashboard/MyProfileBanner.vue'
import ProfileDashboard from '@/components/dashboard/ProfileDashboard.vue'
import Cta from '@/components/home/Cta.vue'

export default {
    name: "MyProfileView",
    components: {
        MyProfileBanner, ProfileDashboard, Cta
    }
};
</script>
