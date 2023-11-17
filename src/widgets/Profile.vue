<script setup lang="ts">
import { userType } from "@/types/ApiType";
import { PropType } from "vue";

defineProps({
  user: Object as PropType<userType>
});
</script>

<template>
<div class="profile">
  <div class="profile__content">
    <el-avatar :src="user?.avatar_url" :size="250" />
    
    <p class="profile__name">{{ user?.name }}</p>
    <div class="profile__info">
      <a class="profile__login" :href="user?.html_url" target="_blank">{{ user?.login }}</a>
      <p class="profile__bio">{{ user?.bio }}</p>
      <p class="profile__email">{{ user?.email }}</p>
      <div class="profile__location location" v-if="user?.location">
        <img class="location__marker" src="/src/assets/images/marker_icon.png" />
        <span class="location__city">{{ user?.location }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1150px;
  width: 100%;
  height: auto;
  padding: 1rem;
  background: #ffffff;
  border-radius: 1rem;
  box-shadow: 0 2px 10px #0000001a;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

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
    padding-top: 5px;
    text-decoration: none;
    color: #06b3e7;
  }

  &__bio {
    padding-top: 20px;
  }
}

.location {
  display: flex;
  padding-top: 10px;

  &__marker {
    width: 17px;
    height: 17px;
    margin-right: 5px;
  }
}
</style>