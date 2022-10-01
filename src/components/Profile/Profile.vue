<script setup lang="ts">
import Avatar from "../Avatar/Avatar.vue";

interface Props {
  user: {
    name: string,
    login: string,
    email: string,
    location: string,
    avatar_url: string
  };
}
const props = defineProps<Props>();
</script>

<template>
<div class="profile">
  <Avatar :avatar_url="props.user.avatar_url"/>
  <p class="profile__name">{{ props.user.name }}</p>
  <div class="profile__info">
      <a class="profile__login" href="#">@{{ props.user.login }}</a>
      <a class="profile__email" href="#">{{ props.user.email }}</a>
      <p class="profile__location">{{ props.user.location }}</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 400px;

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
  }

  &__login, &__email {
    padding-top: 10px;
    text-decoration: none;
    color: #06b3e7;
  }

  &__location {
    padding-top: 10px;
  }
}
</style>