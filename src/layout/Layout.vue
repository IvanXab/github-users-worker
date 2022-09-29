<script>
export default {
  name: "Layout"
}
</script>

<template>
<div class="layout">
  <div class="layout__content">
    <div class="layout__profile">
      <div class="layout__avatar">
        avatar
      </div>
      <div class="layout__name">
        name
      </div>
      <div class="layout__info">
        info
      </div>
    </div>
    <div class="layout__projects">
      <div>
        projects
      </div>
    </div>
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
  
  &__profile {
    width: 500px;
    height: 700px;
    border: 1px solid black
  }

  &__projects {
    width: 700px;
    height: 700px;
    border: 1px solid black
  }

  &__avatar {
    width: 300px;
    height: 250px;
    margin-bottom: 30px;
    border: 1px solid black
  }

  &__name {
    width: 100%;
    height: 50px;
    margin-bottom: 30px;
    border: 1px solid black
  }

}
</style>