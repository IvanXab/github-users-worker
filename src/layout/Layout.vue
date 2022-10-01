<template>
<div class="layout">
  <div class="layout__content">
      <slot></slot>
  </div>
</div>
</template>

<style lang="scss" scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  &__content {
    display: flex;
  }
}
</style>