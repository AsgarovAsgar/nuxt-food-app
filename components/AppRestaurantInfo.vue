<template>
  <div class="mx-24 my-12 flex flex-col items-center space-y-8">
    <div class="flex flex-col space-y-4" v-for="store in fooddata" :key="store.id">
      <div>
        <h1 class="text-2xl font-bold">{{ store.name }}</h1>
        <p><span>Delivery Time </span>{{ store.deliveryTime }}</p>
        <p><span>Rating </span>{{ store.rating }}</p>
        <div class="flex my-1" v-if="store.freeDelivery">
          <p class="px-2 pb-1 w-auto bg-red-600 rounded-lg text-white"
            >Free Delivery</p
          >
        </div>
      </div>
      <div class="items-center grid grid-cols-3 gap-4">
        <div
          v-for="menuitem in store.menu"
          :key="menuitem.id"
          class="relative rounded-lg shadow-md"
        >
        <img class="h-56 rounded-lg w-full object-fit" :src="menuitem.img" alt="">
        <div class="rounded-b-lg absolute bottom-0 flex justify-between px-3 py-2  text-sm w-full bg-white text-black">
            <div>
                <h4 class="font-semibold">{{menuitem.item}}</h4>
                <p>${{menuitem.price}}</p>
            </div>
            <button class="px-2 pb-1 rounded-md border border-green-700 text-green-700">View Item ></button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["fooddata"]),
  },
};
</script>
