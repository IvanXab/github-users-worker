<template>
<main class="main">
  <slot></slot>
</main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
  }
}
</style>
