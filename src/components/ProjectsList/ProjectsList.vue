<script setup lang="ts">
import Card from "../Card/Card.vue";
</script>

<template>
<div class="projects-list">
  <h1>User repositories :</h1>
  <div class="projects-list__content">
    <Card v-for="project in 100"/>
  </div>
</div>
</template>

<style lang="scss" scoped>
.projects-list {
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 15px;
  }

  &__content {
    display: flex;
    flex-wrap: wrap;
    max-width: 1100px;
    width: 100%;
    height: 510px;
    border: 1px solid #9d9d9d;
    border-radius: 10px;
    overflow: auto;
  }
}
</style>