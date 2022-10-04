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
      <div style="">
        <img src="src/assets/images/repos_icon.png" alt="" width="16">
        <span class="card__name">{{ props.project.name }}</span>
      </div>
      <p class="card__description">{{ props.project.description }}</p>
      <div class="card__stats stats-item">
        <div class="stats-item__lang">
          <div class="circle"></div>
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
  display: flex;
  width: 340px;
  height: 150px;
  margin: 10px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  box-shadow: 5px 2px 5px #d5d2d2;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    padding: 15px 10px;
  }

  &__name {
    padding-left: 5px;
    font-size: 18px;
    line-height: 1.5;
    color: #047ce0;
  }

  &__description {
    font-size: 14px;
    color: #494949;
  }

  &:hover {
    transition: 0.5s;
    transform: scale(1.01);
  }
}

.stats-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__lang {
    display: flex;
  }

  &__popular {
    display: flex;
  }

  &__stars {
    margin: 0 5px;
    span {
      padding-left: 2px;
    }
  }

  &__forks {
    margin: 0 5px;
    span {
      padding-left: 2px;
    }
  }
}

.circle {
  width: 17px;
  height: 17px;
  margin-right: 5px;
  border-radius: 50%;
  background: #8f8f8f;
}
</style>