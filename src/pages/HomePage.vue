<script setup lang="ts">
import Profile from "../components/Profile/Profile.vue";
import ProjectsList from "../components/ProjectsList/ProjectsList.vue";
import SearchForm from "../components/SearchForm/SearchForm.vue";
import Layout from "../layout/Layout.vue";

import {ref} from "vue";
import {AxiosService} from "../api/AxiosService";
import {optionsType, repositoryType, userType} from "../types/ApiType";
import {usePepositoresStore} from "../stores/repositores";


const user = ref<userType>();
const repos = ref<repositoryType[]>();
const optionsFilter = ref<Set<optionsType>>();
const isSearch = ref(false);
const isLoading = ref(false);

const axiosService = new AxiosService();
const repositoresStore = usePepositoresStore();

const setLanguagesSelect = (repos: repositoryType[]): void => {
  const optionsLanguages = new Set<optionsType>();
  const languages = new Set<string>();
  repos.forEach((r: repositoryType) => {
    if (r.language) {
      languages.add(r.language)
    }
  });
  languages.forEach((l:string) => optionsLanguages.add({ value: l, label: l}));
  optionsFilter.value = optionsLanguages;
};

const handleSearchUser = async (username: string): Promise<void> => {
  isLoading.value = true;
  isSearch.value = true;
  user.value = await axiosService.fetchUser(username);
  //repos.value = await axiosService.fetchRepos(username);
  repositoresStore.repositories = await axiosService.fetchRepos(username);
  isLoading.value = false;
  //setLanguagesSelect(repos.value); :repos="repos" :options-filter="optionsFilter"

};
</script>

<template>
<layout>
  <search-form @submit="handleSearchUser"/>
  <div class="home-page" v-if="isSearch">
    <profile :user="user" :is-loading="isLoading" />
    <projects-list :is-loading="isLoading" />
  </div>
  <div class="home-page__welcome" v-else>
    <img class="home-page__logo" src="/src/assets/images/Octocat.png">
    <p class="home-page__text">You can search for a GitHub profile now!</p>
  </div>
</layout>
</template>

<style lang="scss" scoped>
.home-page {
  display: flex;

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
  }

  @media (max-width: 1500px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
