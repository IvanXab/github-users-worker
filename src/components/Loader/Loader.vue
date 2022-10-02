<template>
  <div class="loader">
    <span class="loader__content"></span>
  </div>
</template>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  &__content {
    width: 48px;
    height: 48px;
    border: 5px solid #727272;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>