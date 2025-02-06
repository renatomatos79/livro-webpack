<script setup>
import {ref} from "vue";

// Components
import FilterIcon from "@/components/icons/svg/FilterIcon.vue"
import SearchIcon from "@/components/icons/svg/SearchIcon.vue"

const emit = defineEmits(['filter-click'])

// Refs
const text = ref('')
</script>

<template>
  <div class="d-flex flex-row m-1 align-items-center">
    <FilterIcon />
    <span class="H6"> FILTER </span>
  </div>
  <div class="row m-2">
    <div class="input-group mt-1 col-12">
      <input type="text" v-model="text" class="form-control" placeholder="" aria-label="" aria-describedby="button-addon2">
      <button class="btn btn-outline-secondary" type="button" @click="emit('filter-click', text)">
        <SearchIcon />
      </button>
    </div>
  </div>
</template>