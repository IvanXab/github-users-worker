<script setup lang="ts">
import Card from "../Card/Card.vue";
import Loader from "../Loader/Loader.vue";
import {defineProps, ref} from "vue";
import { optionsType } from "../../types/ApiType";
import { usePepositoresStore } from "../../stores/repositores";

interface Props {
  optionsFilter?: Set<optionsType>;
  isLoading: boolean;
}

const props = defineProps<Props>();
const repositoresStore = usePepositoresStore();

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
      <el-select v-model="filterValue" placeholder="Language" @change="repositoresStore.setFilter">
        <el-option
            v-for="item in optionsFilter"
            :key="item.value"
            :label="item.label"
            :value="item.value"
        />
      </el-select>
      <el-select v-model="sortValue" placeholder="Sort">
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
            v-for="r in repositoresStore.getFilteredRepos"
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
  width: 80%;
  border: 1px solid #cccccc;
  padding: 10px;
  border-radius: 10px;

  &__content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
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
  }

  &__search {
    display: flex;
  }
}
</style>