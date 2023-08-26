<template>
  <div id="app">
    <div class="app-header">
      <router-link :to="{ name: 'task1' }">Задание 1</router-link>
      <router-link :to="{ name: 'task2' }">Задание 2</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.app-header {
  width: 200px;
  margin: auto;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 10px;
  left: calc(50% - 200px);
  right: calc(50% - 200px);

  background-color: white;
  border-radius: 20px;

  a {
    height: 100%;
    color: var(--text-color-primary);
    text-decoration: none;
    padding: 0 6px;
    display: flex;
    align-items: center;
    white-space: nowrap;

    &.router-link-exact-active {
      text-decoration: underline;
      text-underline-offset: 2px;
    }

    &:hover{
      color: var(--text-color-secondry);
    }
  }
}
</style>
