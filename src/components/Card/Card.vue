<script setup lang="ts">

</script>

<template>
<div class="card">
  <div class="card__content">
      <p class="card__name">my-project</p>
      <p class="card__description">My super project in C#</p>
      <div class="card__stats stats-item">
        <div class="stats-item__lang">
          <span>C#</span>
        </div>
        <div class="stats-item__popular">
          <div class="stats-item__stars">
            <img src="src/assets/images/star.png" alt="" width="17">
            <span>1</span>
          </div>
          <div class="stats-item__forks">
            <img src="src/assets/images/icons8-branch-arrow-64.png" alt="" width="17">
            <span>1</span>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {
  width: 340px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  box-shadow: 5px 2px 5px #d5d2d2;

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__name {
    padding: 10px 0;
    font-size: 20px;
    color: #0180ea;
  }

  &__description {
    padding: 10px 0;
    margin-bottom: 25px;
  }

  &:hover {
    transition: 0.5s;
    transform: scale(1.01);
  }
}

.stats-item {
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  &__popular {
    display: flex;
  }

  &__stars {
    margin: 0 5px;
  }

  &__forks {
    margin: 0 5px;
  }
}

</style>