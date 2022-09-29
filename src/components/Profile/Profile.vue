<script setup lang="ts">
import Avatar from "../Avatar/Avatar.vue";
</script>

<template>
<div class="profile">
  <Avatar/>
  <p class="profile__name">Ivan Ivanov</p>
  <div class="profile__info">
      <a href="#">@ivanov</a>
      <a href="#">example@gmail.com</a>
      <p>Novosibirsk, Russia</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 700px;

  &__name {
    margin-left: 15px;
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
  }

  &__info {
    display: flex;
    flex-direction: column;
    margin-left: 15px;

    a {
      padding-top: 10px;
      text-decoration: none;
      color: #06b3e7;
    }

    p {
      padding-top: 10px;
    }
  }
}
</style>