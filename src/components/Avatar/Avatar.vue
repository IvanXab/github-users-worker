<script setup lang="ts">
const urlAvatar:string = "src/assets/images/github-logo_icon-icons.com_73546.png"
</script>

<template>
<div class="avatar">
  <img class="avatar__image" :src="urlAvatar" alt=""/>
</div>
</template>

<style lang="scss" scoped>
.avatar {
  margin: 10px;

  &__image {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>