<script setup lang="ts">
import Card from "../Card/Card.vue";

interface Props {
  repos: []
}
const props = defineProps<Props>();
</script>

<template>
<div class="projects-list">
  <h1>User repositories :</h1>
  <div class="projects-list__content">
    <Card v-for="p in props.repos" :project="p"/>
  </div>
</div>
</template>

<style lang="scss" scoped>
.projects-list {
  display: flex;
  flex-direction: column;

  h1 {
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