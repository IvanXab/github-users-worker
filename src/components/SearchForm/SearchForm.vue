<script setup lang="ts">
import { defineEmits, ref } from "vue";
import { useDark } from "@vueuse/core";

const inputUser = ref('');

const emit = defineEmits<{
  (e: 'submit', searchValue: string): void
}>();

const isDark = useDark();

const handleSubmit = (): void => {
    emit('submit', inputUser.value);
};

</script>

<template>
<div class="search-form" @keyup.enter="handleSubmit">
  <input
      class="search-form__input"
      type="text"
      placeholder="Find a GitHub profile..."
      v-model="inputUser"
  />
  <el-button @click="handleSubmit" type="primary" round>Search</el-button>
  <el-switch v-model="isDark" />
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
    border: 1px solid #409eff;
    border-radius: 10px;

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

  @media screen and (max-width: 1520px) {
    margin-top: 20px;
  }
}
</style>