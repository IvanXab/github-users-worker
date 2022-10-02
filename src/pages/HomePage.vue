<script setup lang="ts">
import Profile from "../components/Profile/Profile.vue";
import ProjectsList from "../components/ProjectsList/ProjectsList.vue";
import SearchForm from "../components/SearchForm/SearchForm.vue";
import Layout from "../layout/Layout.vue";
import Loader from "../components/Loader/Loader.vue";

import {ref} from "vue";
import axios from "axios";


let user = ref({});
let repos = ref([]);
let isSearch = ref(false);
let isLoading = ref(false);


const fetchUser = async (username: string): Promise<void> => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  user.value = {
    name: response.data.name,
    login: response.data.login,
    email: response.data.email,
    location: response.data.location,
    avatar_url: response.data.avatar_url
  };
};

const fetchRepos = async (username: string): Promise<void> => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  repos.value = response.data;
};

const handleSearchUser = async (username: string): Promise<void> => {
  isLoading.value = true;
  isSearch.value = true;
  await fetchUser(username);
  await fetchRepos(username);
  isLoading.value = false;
};
</script>

<template>
<Layout>
  <SearchForm @submit="handleSearchUser"/>
  <div class="home-page" v-if="isSearch">
    <Profile :user="user" />
    <ProjectsList :repos="repos" :is-loading="isLoading"/>
  </div>
  <div class="home-page__welcome" v-else>
    <img class="home-page__logo" src="src/assets/images/Octocat.png" alt="">
    <p class="home-page__text">You can search for a GitHub profile now!</p>
  </div>
</Layout>
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
}
</style>
