<script setup lang="ts">
import {defineProps} from "vue";

interface Props {
  avatar_url?: string;
}
const props = defineProps<Props>();
</script>

<template>
<div class="avatar">
  <img class="avatar__image" :src="props.avatar_url" alt=""/>
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