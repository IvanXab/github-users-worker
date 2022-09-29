<script setup lang="ts">

</script>

<template>
<div class="card">
  <div class="card__content">
      <p>MyProject</p>
      <div class="card__lang">
          <p>C++</p>
      </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {
  width: 340px;
  height: 150px;
  border: 2px solid black;

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>