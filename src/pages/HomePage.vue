<script setup lang="ts">
import Profile from "../components/Profile/Profile.vue";
import ProjectsList from "../components/ProjectsList/ProjectsList.vue";
import SearchForm from "../components/SearchForm/SearchForm.vue";
import Layout from "../layout/Layout.vue";

import {ref} from "vue";
import axios from "axios";

let user = ref({});
let repos = ref([]);
let isSearch = ref(false);

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
  isSearch.value = true;
  await fetchUser(username);
  await fetchRepos(username);
};
</script>

<template>
<Layout>
  <SearchForm @submit="handleSearchUser"/>
  <div class="home-page" v-if="isSearch">
    <Profile :user="user"/>
    <ProjectsList :repos="repos"/>
  </div>
  <div class="home-page__welcome" v-if="!isSearch">
    <img src="src/assets/images/Octocat.png" alt="">
    <p>You can search for a GitHub profile now!</p>
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

    img {
      width: 300px;
      margin-bottom: 15px;
    }

    p {
      letter-spacing: 0.3px;
    }
  }
}
</style>
