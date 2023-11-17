<script setup lang="ts">
import { ref } from "vue";

const searchString = ref<string>('');

const emit = defineEmits<{
  (event: 'submit', searchValue: string): void
}>();

const handleSubmit = (): void => {
  if (searchString.value !== '') {
    emit('submit', searchString.value);
  }
};
</script>

<template>
<div class="search-form" @keyup.enter="handleSubmit">
  <el-input 
    v-model.trim="searchString"
    class="search-form-input" 
    placeholder="Введите имя пользователя..." 
  />
  <el-button type="primary" class="search-form-button" @click="handleSubmit">
    Найти
  </el-button>
</div>
</template>

<style lang="scss" scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &-button {
    height: 40px;
  }

  &-input {
    width: 100%;
    max-width: 720px;
    height: 40px;
  }

  @media screen and (max-width: 1520px) {
    margin-top: 20px;
  }
}
</style>