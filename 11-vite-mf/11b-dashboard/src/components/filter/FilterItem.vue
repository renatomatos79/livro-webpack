<script setup>
import { computed } from 'vue';

// components
import BikeIcon from '@/components/icons/svg/BikeIcon.vue';
import BuildingIcon from '@/components/icons/svg/BuildingIcon.vue';
import CarIcon from '@/components/icons/svg/CarIcon.vue';
import CheckIcon from '@/components/icons/svg/CheckIcon.vue';
import DriverIcon from '@/components/icons/svg/DriverIcon.vue';
import FuelIcon from '@/components/icons/svg/FuelIcon.vue';
import KmIcon from '@/components/icons/svg/KmIcon.vue';
import MapIcon from '@/components/icons/svg/MapIcon.vue';
import NotesIcon from '@/components/icons/svg/NotesIcon.vue';
import PhoneIcon from '@/components/icons/svg/PhoneIcon.vue';
import ToolsIcon from '@/components/icons/svg/ToolsIcon.vue';
import TruckIcon from '@/components/icons/svg/TruckIcon.vue';

// Constants
import {
  FILTER_TYPE_BIKE,
  FILTER_TYPE_BUILDING,
  FILTER_TYPE_CAR,
  FILTER_TYPE_TRUCK
} from "@/constants/filter-type-constants";

// props
const props = defineProps({
  iconSize: {
    type: Number,
    default: 32
  },
  itemType: {
    type: String,
    default: FILTER_TYPE_CAR,
    validator: (prop) => [FILTER_TYPE_BUILDING, FILTER_TYPE_CAR, FILTER_TYPE_BIKE, FILTER_TYPE_TRUCK].includes(prop)
  },
  itemId: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'active',
    validator: (prop) => ['active', 'inactive', 'broken'].includes(prop)
  },
  km: {
    type: Number,
    default: 0
  },

})

// Define events
const emit = defineEmits(['click']);

// Computed
const isBuilding = computed(() => props.itemType === FILTER_TYPE_BUILDING);
const isCar = computed(() => props.itemType === FILTER_TYPE_CAR);
const isTruck = computed(() => props.itemType === FILTER_TYPE_TRUCK);
const isBike = computed(() => props.itemType === FILTER_TYPE_BIKE);
const isBroken = computed(() => props.status === 'broken');
const checkColor = computed(() => {
  switch (props.status) {
    case 'active': return 'green';
    case 'inactive': return 'orange';
    default: return 'red';
  }
});

const handleIconClick = () => {
  emit('click', props.itemId);
}
</script>

<template>
  <div class="card">
    <div class="card-img-top">
      <div class="row">
        <div class="d-flex justify-content-between m-1">
          <!-- Filter Type -->
          <div class="col-6">
            <BuildingIcon v-if="isBuilding" :size="iconSize"  />
            <CarIcon v-if="isCar" :size="iconSize"  />
            <TruckIcon v-if="isTruck" :size="iconSize"  />
            <BikeIcon v-if="isBike" :size="iconSize"  />

            <span class="H6 mx-2"> {{ itemId }} </span>
          </div>
          <!-- End - Filter Type -->

          <!-- Toolbar -->
          <div class="col-6 mt-2 px-3 d-flex justify-content-end">
            <CheckIcon :color="checkColor" class="me-1" />
            <DriverIcon v-if="!isBuilding" class="me-1" />
            <ToolsIcon v-if="isBroken" class="me-1" />
            <NotesIcon class="me-1" />
            <FuelIcon v-if="!isBike && !isBuilding" class="me-1"/>
            <KmIcon v-if="!isBike && !isBuilding" class="me-1" />
            <PhoneIcon v-if="isBuilding" class="me-1" />
            <MapIcon @click="handleIconClick" />
          </div>
          <!-- End - Toolbar -->
        </div>
      </div>
    </div>
  </div>
</template>