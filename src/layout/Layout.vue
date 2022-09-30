<script>
import Profile from "../components/Profile/Profile.vue";
import Card from "../components/Card/Card.vue"
import ProjectsList from "../components/ProjectsList/ProjectsList.vue";
export default {
  name: "Layout",
  components: {ProjectsList, Profile, Card}
}
</script>

<template>
<div class="layout">
  <div class="layout__content">
    <Profile/>
    <ProjectsList/>
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

  &__name {
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    border: 1px solid black
  }
}
</style>