<template>
<div class="projects-list">
   <Card v-for="project in 100"/>
</div>
</template>

<style lang="scss" scoped>
.projects-list {
  display: flex;
  flex-wrap: wrap;
  max-width: 1100px;
  width: 100%;
  height: 700px;
  border: 1px solid black;
  overflow: auto;
}
</style>

<script>
import Card from "../Card/Card.vue";
export default {
  components: {Card}
}
</script>