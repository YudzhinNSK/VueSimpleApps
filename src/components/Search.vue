<template>
  <div class='w-full'>
    <label>
      Search
    </label>
    <VTextField
      class='mt-[20px]'
      single-line
      hide-details
      density='compact'
      v-model='input'
      clearable
      placeholder='Search...'
      @change='handleUpdateValue'
      @click:clear='handleUpdateValue'
    ></VTextField>
  </div>
</template>

<script setup lang='ts'>
import { VTextField } from 'vuetify/components'
import { ref } from 'vue'

const input = ref()

const handleUpdateValue = () => {
  emits('updateValue', input.value)
}

const emits = defineEmits<{
  (e: 'updateValue', val: string): void
}>()

</script>

<style scoped>

</style>