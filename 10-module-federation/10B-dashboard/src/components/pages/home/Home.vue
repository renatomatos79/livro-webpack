<script setup>
import {computed, onMounted, ref} from 'vue'
import { AppSettings } from '@/config/AppSettings'
import { GoogleMap, AdvancedMarker, Polygon } from 'vue3-google-map'
import { MOCK_FILTER_TYPES } from '@/constants/mock-constants'
import { FILTER_TYPE_BIKE, FILTER_TYPE_BUILDING, FILTER_TYPE_CAR, FILTER_TYPE_TRUCK } from '@/constants/filter-type-constants'
import { DEFAULT_BIKE_COLOR, DEFAULT_BUILDING_COLOR, DEFAULT_CAR_COLOR, DEFAULT_TRUCK_COLOR } from  '@/constants/colors-constants'

// Components
import Header from "@/components/header/Header.vue"
import Filter from "@/components/filter/Filter.vue"

// Libs
import {addDistanceToLocation, getRandomBetween, getRandomDirection} from "@/libs/util";
import {addDistance} from "../../../libs/util";

// Const
const googleMapApiKey = AppSettings.GoogleMaps.ApiKey

// Refs
const locations = ref({ buildings: [], cars: [], trucks: [], bikes: [] })
const center = ref({ lat: 0, lng:  0})
const isFilterVisible = ref(true)
const handleFilterClick = () => {
  isFilterVisible.value = !isFilterVisible.value
}

const handleRefreshClick = () => {
  // data load
  locations.value = {
    buildings: MOCK_FILTER_TYPES.filter(f => f.itemType === FILTER_TYPE_BUILDING),
    cars: MOCK_FILTER_TYPES
        .filter(f => f.itemType === FILTER_TYPE_CAR)
        .filter(f => f.status !== 'broken')
        .map(car => {
          return addDistance(car, 'Carro')
        }),
    bikes: MOCK_FILTER_TYPES
        .filter(f => f.itemType === FILTER_TYPE_BIKE)
        .filter(f => f.status !== 'broken')
        .map(bike => {
          return addDistance(bike, 'Bike')
        }),
    trucks: MOCK_FILTER_TYPES
        .filter(f => f.itemType === FILTER_TYPE_TRUCK)
        .filter(f => f.status !== 'broken')
        .map(truck => {
          return addDistance(truck, 'Truck')
        })
  }

  // centralização do mapa
  center.value = getCenter(locations.value.buildings)
}

// Computed
const mapsColSize = computed(() => isFilterVisible.value ? 'col-9' : 'col-12')
const polygonArea = computed(() => {
  const paths = locations.value
      .buildings
      .map((m) => {
        return { lat: m.location.latitude, lng: m.location.longitude }
      })

  return {
    paths: [ ...paths ],
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  }
})

// Methods
function getCenter(buildings) {
  const total = buildings.reduce(
      (acc, item) => {
        acc.latitude += item.location.latitude;
        acc.longitude += item.location.longitude;
        return acc;
      },
      { latitude: 0, longitude: 0 }
  );

  return {
    lat: total.latitude / buildings.length,
    lng: total.longitude / buildings.length,
  }
}

// Events
onMounted(() => {
  handleRefreshClick()
})
</script>

<template>
  <div class="dashboard--container">
    <div class="row">
      <div class="col-12">
        <Header @filter-click="handleFilterClick" @refresh-click="handleRefreshClick" />
      </div>
    </div>
    <div class="row">
      <div class="col-3" v-if="isFilterVisible">
        <Filter />
      </div>
      <div :class="mapsColSize">
        <GoogleMap
            mapId="gmId"
            :api-key="googleMapApiKey"
            :center="center"
            style="width: 100%; height: 800px"
            :zoom="15">

          <!-- Buildings -->
          <AdvancedMarker
              v-for="item in locations.buildings"
              :key="item.itemId"
              :options="{
                position: { lat: item.location.latitude, lng: item.location.longitude },
                title: item.title
              }"
              :pin-options="{ background: DEFAULT_BUILDING_COLOR }" />
          <!-- End of Buildings -->

          <!-- CARS -->
          <AdvancedMarker
              v-for="item in locations.cars"
              :key="item.itemId"
              :options="{
                  position: { lat: item.location.latitude, lng: item.location.longitude },
                  title: item.title
                }"
              :pin-options="{ background: DEFAULT_CAR_COLOR }" />
          <!-- End of CARS -->

          <!-- BIKES -->
          <AdvancedMarker
              v-for="item in locations.bikes"
              :key="item.itemId"
              :options="{
                  position: { lat: item.location.latitude, lng: item.location.longitude },
                  title: item.title
                }"
              :pin-options="{ background: DEFAULT_BIKE_COLOR }" />
          <!-- End of BIKES -->

          <!-- TRUCKS -->
          <AdvancedMarker
              v-for="item in locations.trucks"
              :key="item.itemId"
              :options="{
                  position: { lat: item.location.latitude, lng: item.location.longitude },
                  title: item.title
                }"
              :pin-options="{ background: DEFAULT_TRUCK_COLOR }" />
          <!-- End of BIKES -->

          <Polygon :options="polygonArea" />
        </GoogleMap>
      </div>
    </div>
  </div>
</template>
