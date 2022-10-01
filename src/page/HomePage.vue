<script setup lang="ts">
import Profile from "../components/Profile/Profile.vue";
import ProjectsList from "../components/ProjectsList/ProjectsList.vue";
import SearchForm from "../components/SearchForm/SearchForm.vue";
import Layout from "../layout/Layout.vue";

import {ref} from "vue";
import axios from "axios";

let user = ref({});
let repos = ref([]);

const fetchUser = async (username: string) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  user.value = {
    name: response.data.name,
    login: response.data.login,
    email: response.data.email,
    location: response.data.location,
    avatar_url: response.data.avatar_url
  };
};

const fetchRepos = async (username: string) => {
  const response = await axios.get(`https://api.github.com/users/${username}/repos`);
  repos.value = response.data;
};

const handleSearchUser = async (username: string) => {
  await fetchUser(username);
  await fetchRepos(username);
};
</script>

<template>
<Layout>
  <SearchForm @submit="handleSearchUser"/>
  <Profile :user="user"/>
  <ProjectsList :repos="repos"/>
</Layout>
</template>

<style lang="scss" scoped>

</style>