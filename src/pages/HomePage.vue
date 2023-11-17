<script setup lang="ts">
import Profile from "@/widgets/Profile.vue";
import Projects from "@/widgets/Projects.vue";
import SearchForm from "@/widgets/SearchForm.vue";
import Layout from "@/layout/Layout.vue";
import Loader from "@/components/Loader.vue";

import { ref } from "vue";
import { AxiosService } from "@/api/AxiosService";
import { optionsType, repositoryType, userType } from "@/types/ApiType";
import { useRepositoriesStore } from "@/store/repositories";

const user = ref<userType>();
const optionsFilter = ref<Set<optionsType>>();
const isSearch = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const axiosService = new AxiosService();
const repositoriesStore = useRepositoriesStore();

const setLanguagesSelect = (): void => {
  const optionsLanguages = new Set<optionsType>();
  const languages = new Set<string>();

  repositoriesStore.getRepositories.forEach((repository: repositoryType) => {
    if (repository.language) {
      languages.add(repository.language);
    }
  });

  optionsLanguages.add(
    {
      value: 'All',
      label: 'All'
    }
  );
  
  languages.forEach((language: string) => optionsLanguages.add({ 
    value: language, label: language
  }));
  optionsFilter.value = optionsLanguages;
};


const handleSearchUser = async (username: string): Promise<void> => {
  isLoading.value = true;
  isSearch.value = true;

  user.value = await axiosService.fetchUser(username);
  repositoriesStore.setRepositories(await axiosService.fetchRepos(username));

  isLoading.value = false;

  setLanguagesSelect();
};
</script>

<template>
<layout>
  <search-form @submit="handleSearchUser" />
  <div v-if="isSearch" class="home-page">
    <loader v-if="isLoading" />
    <template v-else>
      <profile :user="user" />
      <projects :options-filter="optionsFilter" />
    </template>
  </div>
  <div v-else class="home-page__welcome">
    <img class="home-page__logo" src="/src/assets/images/Octocat.png">
    <p class="home-page__text">
      Теперь вы можете выполнить поиск профиля на GitHub!
    </p>
  </div>
</layout>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  &__welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
  }

  &__logo {
    width: 300px;
    margin-bottom: 15px;
  }

  &__text {
    text-align: center;
    letter-spacing: 0.3px;
    color: var(--el-color-primary);
  }
}
</style>