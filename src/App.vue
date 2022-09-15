<template>
  <NConfigProvider :theme-overrides="themeOverrides">
    <div class="w-screen h-screen">
      <PostsListPage/>
    </div>
  </NConfigProvider>
</template>

<script setup lang="ts">
import PostsListPage from "./pages/PostsListPage.vue";
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: 'blue',
    primaryColorHover: 'black'
  },
}
</script>

<style scoped>
</style>
