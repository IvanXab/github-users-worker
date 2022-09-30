<script setup lang="ts">

</script>

<template>
<div class="card">
  <div class="card__content">
      <p>MyProject</p>
      <p>My super project in C++</p>
      <p>C++</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {
  width: 340px;
  height: 150px;
  margin: 10px;
  border: 2px solid black;

  &__content {
    display: flex;
    flex-direction: column;

    p {
      padding: 10px 0;
      font-size: 20px;
      color: #0180ea;
    }
  }
}
</style>