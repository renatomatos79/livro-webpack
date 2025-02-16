<script setup>
import {computed, ref} from "vue";

// Components
import FilterHeader from "./FilterHeader.vue";
import FilterButtons from "./FilterButtons.vue";
import FilterItem from "./FilterItem.vue";

// Constants
import {FILTER_TYPE_ALL} from "@/constants/filter-type-constants";
import {MOCK_FILTER_TYPES} from "@/constants/mock-constants";

// Ref
const filteredButtons = ref(FILTER_TYPE_ALL)
const filteredText = ref('')

// Computed
const filteredItems = computed(() => {
  const list = MOCK_FILTER_TYPES.filter(mock => filteredButtons.value.some(fb => fb.includes(mock.itemType)))
  if (filteredText.value.length > 0) {
    return list.filter(f => f.itemId.includes(filteredText.value));
  }
  return list;
})

const handleButtonClick = (filter) => {
  filteredButtons.value = [...filter];
  console.log('filter: ', filter);
}

const handleFilterClick = (text) => {
  filteredText.value = text;
  console.log('text: ', text);
}
</script>

<template>
  <div class="row container-filter">
    <FilterHeader @filter-click="handleFilterClick" />
    <div class="row m-2">
      <FilterButtons @button-click="handleButtonClick" />
    </div>
    <div class="row m-2">
      <ul class="list-group" v-for="item in filteredItems">
        <li :key="item.id" class="list-group-item">
          <FilterItem
              :itemType="item.itemType"
              :itemId="item.itemId"
              :status="item.status"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

