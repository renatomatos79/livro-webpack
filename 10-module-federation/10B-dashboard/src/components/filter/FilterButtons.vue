<script setup>
import {ref, watch} from "vue";

// components
import BuildingIcon from "@/components/icons/svg/BuildingIcon.vue";
import CarIcon from "@/components/icons/svg/CarIcon.vue";
import BikeIcon from "@/components/icons/svg/BikeIcon.vue";
import TruckIcon from "@/components/icons/svg/TruckIcon.vue";

// constants
import {
  FILTER_TYPE_BUILDING,
  FILTER_TYPE_CAR,
  FILTER_TYPE_BIKE,
  FILTER_TYPE_TRUCK
} from '@/constants/filter-type-constants.js'

// Events
const emit = defineEmits(['button-click'])

// Refs
const hasBuilding = ref(true)
const hasCar = ref(true)
const hasBike = ref(true)
const hasTruck = ref(true)

// Watch
watch([hasBuilding, hasCar, hasBike, hasTruck], () => {
  const filter = []
  if (hasBuilding.value) filter.push(FILTER_TYPE_BUILDING)
  if (hasCar.value) filter.push(FILTER_TYPE_CAR)
  if (hasBike.value) filter.push(FILTER_TYPE_BIKE)
  if (hasTruck.value) filter.push(FILTER_TYPE_TRUCK)
  // emit button-click
  emit('button-click', filter)
})
</script>

<template>
  <div class="btn-group" role="group" aria-label="toggle button group">
    <input type="checkbox" v-model="hasBuilding" class="btn-check" id="btncheck1" autocomplete="off" :true-value="true" :false-value="false">
    <label class="btn btn-outline-primary" for="btncheck1">
      <BuildingIcon :color="hasBuilding ? 'white' : 'black'" />
    </label>
    <input type="checkbox" v-model="hasCar"  class="btn-check" id="btncheck2" autocomplete="off" :true-value="true" :false-value="false" >
    <label class="btn btn-outline-primary" for="btncheck2">
      <CarIcon :color="hasCar ? 'white' : 'black'" />
    </label>
    <input type="checkbox" v-model="hasBike"   class="btn-check" id="btncheck3" autocomplete="off" :true-value="true" :false-value="false">
    <label class="btn btn-outline-primary" for="btncheck3">
      <BikeIcon :color="hasBike ? 'white' : 'black'" />
    </label>
    <input type="checkbox"  v-model="hasTruck"  class="btn-check" id="btncheck4" autocomplete="off" :true-value="true" :false-value="false">
    <label class="btn btn-outline-primary" for="btncheck4">
      <TruckIcon :color="hasTruck ? 'white' : 'black'" />
    </label>
  </div>
</template>