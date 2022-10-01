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
  <transition-group name="list">
  <div class="projects-list__content">
    <Card v-for="p in props.repos" :key="p.name" :project="p"/>
  </div>
  </transition-group>
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

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>