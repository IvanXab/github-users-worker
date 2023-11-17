<script setup lang="ts">
import Card from "@/components/Card.vue";
import { PropType, ref } from "vue";
import { optionsType } from "@/types/ApiType";
import { useRepositoriesStore } from "@/store/repositories";

defineProps({
  optionsFilter: Object as PropType<Set<optionsType>>
});

const repositoriesStore = useRepositoriesStore();
const filterValue = ref<string>('');
const sortValue = ref<string>('');

const optionsSort = [
  {
    value: 'name',
    label: 'По названию'
  },
  {
    value: 'stars',
    label: 'По популярности'
  }
];
</script>

<template>
<div class="projects">
  <div class="projects__header">
    <h1>Репозитории пользователя:</h1>
    <div class="projects__select">
      <el-select v-model="filterValue" placeholder="Язык программирования" @change="repositoriesStore.setFilter">
        <el-option
          v-for="item in optionsFilter"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="sortValue" placeholder="Сортировать" @change="repositoriesStore.setSort">
        <el-option
          v-for="item in optionsSort"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
  </div>
  <el-scrollbar>
    <div class="projects__content">
      <card 
       v-for="repository in repositoriesStore.getFilteredRepositories" 
       :key="repository.name"
       :repository="repository" 
      />
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
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px #0000001a;

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
    gap: 1rem;

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
    gap: 10px;
  }

  &__search {
    display: flex;
  }
}
</style>