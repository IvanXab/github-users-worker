<script>
import Profile from "../components/Profile/Profile.vue";
import ProjectsList from "../components/ProjectsList/ProjectsList.vue";

export default {
  name: "Layout",
  components: {ProjectsList, Profile}
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
}
</style>