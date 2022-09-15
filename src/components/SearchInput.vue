<template>
  <div
    class="flex items-center justify-center min-w-[350px] px-20 mt-10"
  >
    <form @submit.prevent.stop="onSearch">
      <NInputGroup>
        <NInput v-model:value="keywords" clearable @clear="onClear"></NInput>
        <NButton @click="onSearch">Search</NButton>
      </NInputGroup>
    </form>
  </div>
</template>

<script setup lang="ts">
import {NInputGroup, NInput, NButton} from "naive-ui"
import {ref} from "vue";

const emit = defineEmits<{
  (e: 'search', keywords: string): void
}>()

const keywords = ref('')

const onClear = () => {
  emit('search', '')
}

const onSearch = () => {
  emit('search', keywords.value)
}
</script>