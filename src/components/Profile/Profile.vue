<script setup lang="ts">
import Avatar from "@/components/Avatar/Avatar.vue";
import Loader from "@/components/Loader/Loader.vue";
import { userType } from "@/types/ApiType";
import {defineProps, PropType} from "vue";

const props = defineProps({
  user: Object as PropType<userType>,
  isLoading: Boolean,
});
</script>

<template>
<div class="profile">
  <loader v-if="props.isLoading"/>
  <div class="profile__content" v-else>
    <avatar :avatar_url="props.user?.avatar_url"/>
    <p class="profile__name">{{ props.user?.name }}</p>
    <div class="profile__info">
      <a class="profile__login" :href="props.user?.html_url" target="_blank">{{ props.user?.login }}</a>
      <p class="profile__bio">{{ props.user?.bio }}</p>
      <p class="profile__email">{{ props.user?.email }}</p>
      <div class="profile__location location" v-if="props.user?.location">
        <img class="location__marker" src="/src/assets/images/marker_icon.png" />
        <span class="location__city">{{ props.user?.location }}</span>
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
  width: 350px;
  height: 400px;

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