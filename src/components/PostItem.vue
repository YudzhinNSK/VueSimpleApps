<template>
  <div class="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
    <div class="grid grid-rows-[60px-1fr-60px] gap-3 h-full">
      <div class="text-blue-500">
        {{post.title}}
      </div>
      <div>
        {{post.body}}
      </div>
      <div v-if="post.authorName" class="text-gray-400">
        {{post.authorName}}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {PropType} from "vue";
import {Post} from "../entities/post";

const props = defineProps({
  post: {
    type: Object as PropType<Post>,
    required: true
  }
})

</script>

<style scoped>

</style>