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
  <input v-model="inputUser" class="search-form__input" type="text" placeholder="Search user..."/>
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
    height: 32px;
    padding: 10px;
    border: 1px solid #a9a9a9;
    border-radius: 20px;
  }

  &__button {
    width: 70px;
    height: 32px;
    margin-left: 10px;
    border: none;
    border-radius: 15px;
    background: #b0c6d3;

    &:hover {
      transition: 0.2s;
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