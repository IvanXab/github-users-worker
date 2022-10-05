<script setup lang="ts">
import Card from "../Card/Card.vue";
import Loader from "../Loader/Loader.vue";
import {repositoryType} from "../../types/ApiType";

interface Props {
  repos: repositoryType[] | undefined;
  isLoading: boolean;
}

const props = defineProps<Props>();
</script>

<template>
<div class="projects-list">
  <h1 class="projects-list__header">User repositories :</h1>
  <div class="projects-list__content">
    <loader v-if="props.isLoading"/>
    <card
        v-else
        v-for="r in props.repos"
        :key="r.name"
        :repository="r"
    />
  </div>
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

  &__header {
    font-size: 24px;
    margin-left: 10px;
    margin-bottom: 15px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    width: 100%;
    height: 510px;
    border-radius: 10px;
    overflow: auto;
  }

  &__search {
    display: flex;
  }
}
</style>