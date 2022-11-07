<script setup lang="ts">
import {defineEmits, ref} from "vue";

const inputUser = ref('');
const emit = defineEmits<{ (e: 'submit', searchValue: string): void }>();

const handleSubmit = (): void => {
    emit('submit', inputUser.value);
}
</script>

<template>
<div class="search-form" @keyup.enter="handleSubmit">
  <input
      class="search-form__input"
      type="text"
      placeholder="Find a GitHub profile..."
      v-model="inputUser"
  />
  <button class="search-form__button" @click="handleSubmit">Search</button>
</div>
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
    border: 1px solid #5d5d5d;
    border-radius: 8px;

    @media screen and (max-width: 866px) {
        width: 550px;
    }

    @media screen and (max-width: 650px) {
      width: 350px;
    }

    @media screen and (max-width: 450px) {
      width: 250px;
    }

    @media screen and (max-width: 320px) {
      width: 210px;
    }
  }

  &__button {
    width: 70px;
    height: 40px;
    margin-left: 10px;
    border: none;
    border-radius: 15px;
    background-image: linear-gradient(to right, #d5dadc, #d6d9db, #d6d8d9, #d7d7d8, #d6d6d6);

    &:hover {
      background-image: linear-gradient(to right, #50e576, #43e684, #36e791, #28e89d, #19e9a9);
      transition: 1s;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 1520px) {
    margin-top: 20px;
  }
}
</style>