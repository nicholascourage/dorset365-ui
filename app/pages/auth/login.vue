<template>

    <!--  Common Author Area -->
    <CommonAuthorFour />

    <!-- Cta Area -->
    <Cta />


</template>
<script>
import CommonAuthorFour from '@/components/user/CommonAuthorFour.vue'
import Cta from '@/components/home/Cta.vue'


export default {
    name: "LoginView",
    components: {
        CommonAuthorFour, Cta
    }
};
</script>
