<script setup lang="ts">
import Card from "@/components/Card/Card.vue";
import Loader from "@/components/Loader/Loader.vue";
import {defineProps, PropType, ref} from "vue";
import { optionsType } from "@/types/ApiType";
import { useRepositoriesStore } from "@/store/repositories";

const props = defineProps({
  optionsFilter: Object as PropType<Set<optionsType>>,
  isLoading: Boolean,
});

const repositoriesStore = useRepositoriesStore();
const filterValue = ref('');
const sortValue = ref('');

const optionsSort = [
  {
    value: 'name',
    label: 'Name'
  },
  {
    value: 'stars',
    label: 'Stars'
  }
];
</script>

<template>
<div class="projects-list">
  <div class="projects-list__header">
    <h1>User repositories :</h1>
    <div class="projects-list__select">
      <el-select v-model="filterValue" placeholder="Language" @change="repositoriesStore.setFilter">
        <el-option
            v-for="item in optionsFilter"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select v-model="sortValue" placeholder="Sort" @change="repositoriesStore.setSort">
        <el-option
            v-for="item in optionsSort"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
    </div>
  </div>
    <loader v-if="props.isLoading"/>
    <el-scrollbar v-else>
      <div class="projects-list__content">
        <card
            v-for="r in repositoriesStore.getFilteredRepositories"
            :key="r.name"
            :repository="r"
        />
      </div>
    </el-scrollbar>
</div>
</template>

<style lang="scss" scoped>
.projects-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1120px;
  padding: 10px;
  border-radius: 10px;

  &__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;
    min-height: 80%;
    max-height: 510px;
    border-radius: 10px;
  }

  &__header {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      margin-left: 10px;
      margin-bottom: 15px;
    }

    @media (max-width: 1120px) {
        align-items: center;
        flex-direction: column;
    }
  }

  &__select {
     display: flex;
  }

  &__search {
    display: flex;
  }
}
</style>