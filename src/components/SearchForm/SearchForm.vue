<script setup lang="ts">
import {defineEmits, ref} from "vue";

const inputUser = ref('');

const emit = defineEmits<{ (e: 'submit', searchValue: string): void }>();

const handleSubmit = (searchValue: string) => {
    searchValue = inputUser.value;
    emit('submit', searchValue);
}
</script>

<template>
<div class="search-form">
  <input type="text" placeholder="Search user..." v-model="inputUser"/>
  <button @click="handleSubmit">+</button>
</div>
</template>

<style lang="scss" scoped>
.search-form {
  display: flex;
  flex-direction: column;
}
</style>