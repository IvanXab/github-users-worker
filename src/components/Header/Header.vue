<template>
<header class="header">
  <div class="header__content">
      <h1>GitHub worker</h1>
  </div>
</header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 60px;
  background: black;

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    h1 {
      font-size: 20px;
      letter-spacing: 0.1px;
      text-transform: uppercase;
      color: white;
    }
  }
}
</style>