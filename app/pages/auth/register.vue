<template>

    <!--  Common Author Area -->
    <CommonAuthorThree />

    <!-- Cta Area -->
    <Cta />

</template>
<script>
import CommonAuthorThree from '@/components/user/CommonAuthorThree.vue'
import Cta from '@/components/home/Cta.vue'

export default {
    name: "RegisterView",
    components: {
    CommonAuthorThree, Cta
    }
};
</script>
