<template>
<div class="main">
  <div class="main__content">
      <slot></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  width: 100%;
  min-height: 100%;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
    flex-direction: column;
  }
}
</style>
