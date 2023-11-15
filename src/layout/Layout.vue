<template>
  <main class="main">
    <slot></slot>
  </main>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
  min-height: 100%;
  padding: 1rem;
}
</style>