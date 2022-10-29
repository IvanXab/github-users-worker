<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  avatar_url: String,
});
</script>

<template>
<div class="avatar">
  <img class="avatar__image" :src="props.avatar_url" />
</div>
</template>

<style lang="scss" scoped>
.avatar {
  margin: 10px;

  &__image {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>