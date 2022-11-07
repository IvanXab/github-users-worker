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
<div class="projects">
  <div class="projects__header">
    <h1>User repositories :</h1>
    <div class="projects__select">
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
      <div class="projects__content">
        <card v-for="repository in repositoriesStore.getFilteredRepositories" :key="repository.name" :repository="repository" />
      </div>
    </el-scrollbar>
</div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  max-width: 1150px;
  width: 100%;
  padding: 35px 20px;

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-height: 510px;
    min-height: 80%;
    width: 100%;
    padding: 10px;
  }

  &__header {
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 24px;
      margin-left: 10px;
      margin-bottom: 15px;
    }

    @media screen and (max-width: 1120px) {
      display: flex;
      flex-direction: column;
      align-items: center;
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