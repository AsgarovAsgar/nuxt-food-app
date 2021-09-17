<template>
    <div>
        <h1 class="mx-36 mt-12 tracking-wider text-4xl font-bold">Restaurants</h1>
        <AppRestaurantInfo />
    </div>
</template>

<script>
import AppRestaurantInfo from '@/components/AppRestaurantInfo.vue'

export default {
    components: {
        AppRestaurantInfo
    }
}
</script>