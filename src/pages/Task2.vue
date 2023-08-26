<template>
  <div class="text-area-wrapper">
    <text-area
      v-model="modelValue"
      label="test label"
    />
  </div>
</template>

<script setup lang="ts">
import TextArea from "../components/common/TextArea/text-area.vue";
import {ref, Ref} from "vue";

const modelValue: Ref<string | number> = ref('')
</script>

<style lang="scss" scoped>
.text-area-wrapper{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 100px;
  width: 500px;
  height: 400px;
  background-color: white;

  border-radius: 6px;
}
</style>