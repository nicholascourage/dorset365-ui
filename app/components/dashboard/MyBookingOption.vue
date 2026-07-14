<template>
    <div v-for="group in groups">
        <li v-on:click="group.open = !group.open" class="dashboard_dropdown_button"><i class="fas fa-address-card"></i>
            My bookings
            <span> <i class="fas fa-angle-down"></i></span>
        </li>
        <div v-show="!group.open">
            <div class="booing_sidebar_dashboard">
                <ul>
                    <li>
                        <NuxtLink to="/dashboard/bookings/hotels"><i class="fas fa-hotel"></i>Hotel
                            booking</NuxtLink>
                    </li>
                    <li><NuxtLink to="/dashboard/bookings/flights"><i class="fas fa-paper-plane"></i>Flight
                            booking</NuxtLink></li>
                    <li>
                        <NuxtLink to="/dashboard/bookings/tours">
                            <i class="fas fa-map"></i>Tour booking
                        </NuxtLink>
                    </li>
                    <li><NuxtLink to="/dashboard/bookings/history">
                            <i class="fas fa-history"></i>Booking history</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "MyBookingOption",
    data() {
        return {
            groups: {
                "group 1": {
                    open: "false"
                }
            }
        }
    }
};
</script>