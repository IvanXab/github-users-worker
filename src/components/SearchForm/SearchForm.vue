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
  <input v-model="inputUser" class="search-form__input" type="text" placeholder="Find a GitHub profile..."/>
  <button @click="handleSubmit" class="search-form__button">Search</button>
</div><hr>
</template>

<style lang="scss" scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;

  &__input {
    width: 700px;
    height: 40px;
    padding: 10px;
    border: 1px solid #a9a9a9;
    border-radius: 10px;
  }

  &__button {
    width: 70px;
    height: 40px;
    margin-left: 10px;
    border: none;
    border-radius: 15px;
    background-image: linear-gradient(to right, #d5dadc, #d6d9db, #d6d8d9, #d7d7d8, #d6d6d6);

    &:hover {
      transition: 0.5s;
      opacity: 0.8;
      cursor: pointer;
    }
  }
}

hr {
  margin: 20px 0 30px;
  opacity: 0.4;
}
</style>