<script setup lang="ts">
import {onMounted, ref} from "vue";
import axios from "axios";
import Profile from "../components/Profile/Profile.vue";
import ProjectsList from "../components/ProjectsList/ProjectsList.vue";

let user = ref({});
let repos = ref([]);

const fetchUser = async () => {
    const response = await axios.get('https://api.github.com/users/IvanXablin');
    user.value = {
        name: response.data.name,
        login: response.data.login,
        email: response.data.email,
        location: response.data.location,
        avatar_url: response.data.avatar_url
    };
}

const fetchRepos = async () => {
  const response = await axios.get('https://api.github.com/users/IvanXablin/repos');
  repos.value = response.data;
  console.log(repos.value)
}

onMounted(() => {
  fetchUser();
  fetchRepos()
});

</script>

<template>
<div class="layout">
  <div class="layout__content">
    <Profile :user="user"/>
    <ProjectsList :repos="repos"/>
  </div>
</div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
  }
}
</style>