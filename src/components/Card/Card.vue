<script setup lang="ts">
interface Props {
  project: {
    name: string,
    description: string,
    language: string,
    stargazers_count: string,
    forks_count: string
  };
}
const props = defineProps<Props>();
</script>

<template>
<div class="card">
  <div class="card__content">
      <p class="card__name">{{ props.project.name }}</p>
      <p class="card__description">{{ props.project.description }}</p>
      <div class="card__stats stats-item">
        <div class="stats-item__lang">
          <span>{{ props.project.language }}</span>
        </div>
        <div class="stats-item__popular">
          <div class="stats-item__stars">
            <img src="src/assets/images/star.png" alt="" width="17">
            <span>{{ props.project.stargazers_count }}</span>
          </div>
          <div class="stats-item__forks">
            <img src="src/assets/images/icons8-branch-arrow-64.png" alt="" width="17">
            <span>{{ props.project.forks_count }}</span>
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
    margin-bottom: 15px;
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