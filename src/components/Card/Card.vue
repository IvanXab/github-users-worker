<script setup lang="ts">
import { repositoryType } from "@/types/ApiType";
import { defineProps, PropType } from "vue";

const props = defineProps({
  repository: Object as PropType<repositoryType>,
});
</script>

<template>
<div class="card">
  <div class="card__name">
    <img src="/src/assets/images/repos_icon.png" width="17">
    <a class="card__url" :href="props.repository?.html_url" target="_blank">{{ props.repository?.name }}</a>
  </div>
  <p class="card__description">{{ props.repository?.description }}</p>
  <div class="card__stats stats-item">
    <div class="stats-item__lang">
      <div class="stats-item__circle" v-if="props.repository?.language"></div>
      <span>{{ props.repository?.language }}</span>
    </div>
    <div class="stats-item__popular">
      <div class="stats-item__stars">
        <img src="/src/assets/images/star.png" width="17">
        <span>{{ props.repository?.stargazers_count }}</span>
      </div>
      <div class="stats-item__forks">
        <img src="/src/assets/images/icons8-branch-arrow-64.png" width="17">
        <span>{{ props.repository?.forks_count }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 340px;
  width: 100%;
  height: 150px;
  margin: 10px;
  padding: 15px 10px;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  box-shadow: 5px 2px 5px #d5d2d2;

  &__url {
    padding-left: 5px;
    font-size: 18px;
    text-decoration: none;
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

  &__circle {
    width: 17px;
    height: 17px;
    margin-right: 5px;
    border-radius: 50%;
    background: #8f8f8f;
  }
}


</style>