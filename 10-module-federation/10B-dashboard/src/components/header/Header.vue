<script setup>
import RefreshIcon from "../icons/svg/RefreshIcon.vue";
import FilterIcon from "../icons/svg/FilterIcon.vue";
const emit = defineEmits(['filter-click', 'refresh-click'])
</script>

<template>
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand mx-1" href="#">Dashboard</a>
  <form class="form-inline">
    <button class="btn btn-sm btn-outline-success mx-1" type="button" @click="emit('refresh-click')">
      <RefreshIcon :size="12" /> Refresh
    </button>
    <button class="btn btn-sm btn-outline-success mx-1" type="button" @click="emit('filter-click')">
      <FilterIcon :size="12" /> Filter
    </button>
  </form>
</nav>
</template>