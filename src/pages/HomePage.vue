<script setup lang="ts">
import Profile from "@/components/Profile.vue";
import Projects from "@/components/Projects.vue";
import SearchForm from "@/components/SearchForm.vue";
import Layout from "@/layout/Layout.vue";

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

  repositoriesStore.getRepositories.forEach((r: repositoryType) => {
    if (r.language) {
      languages.add(r.language);
    }
  });

  optionsLanguages.add(
      {
        value: 'All',
        label: 'All'
      }
  );
  languages.forEach((l: string) => optionsLanguages.add({ value: l, label: l}));
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
  <div class="home-page" v-if="isSearch">
    <profile :user="user" :is-loading="isLoading" />
    <projects :is-loading="isLoading" :options-filter="optionsFilter" />
  </div>
  <div class="home-page__welcome" v-else>
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
    letter-spacing: 0.3px;
    color: var(--el-color-primary);
  }
}
</style>