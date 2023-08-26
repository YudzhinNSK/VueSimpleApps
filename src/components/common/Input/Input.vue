<template>
  <div
    class="input-wrapper"
  >
    <span
      v-if="topLabel"
      class="input-wrapper__label-text"
    >
      {{ topLabel }}
    </span>
    <input
      class="custom-input"
      :style="styles"
      type="text"
      :model-value="modelValue"
      :value="inputValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxLen"
      pattern="(?=(?:.*[A-Za-z]){2})(?=(?:.*[0-9]){4})^.{6,}$"
      @input="(e) => handleInputEvent(e as InputEvent)"/>
  </div>
</template>

<script setup lang="ts">
import {computed, StyleValue } from "vue";

const props = defineProps<{
  placeholder?: string;
  topLabel?: string;
  styles?: StyleValue;
  isError?: boolean;
  disabled?: boolean;
  modelValue: number | string;
  mask?: string;
  maxLen?: number;
}>()

const emits = defineEmits<{
  (e: 'update:model-value', value: number | string): void
}>()

const handleInputEvent = (event: InputEvent): void => {
  let value = (event.target as HTMLInputElement).value;

  if (props.mask) {
    const maskRegex = new RegExp(props.mask);
    if(!maskRegex.test(value)) {
      emits('update:model-value', value.slice(0, -1))
      return
    }
  }
  emits('update:model-value', value)
}
const inputValue = computed(() => {
  const val = props.modelValue as string
  if (props.mask) {
    const maskRegex = new RegExp(props.mask);
    if(!maskRegex.test(val)) return val.slice(0, -1)
  }
  return val;
})
</script>

<style lang="scss">
.input-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
  position: relative;

  .custom-input{
    background-color: var(--background-color);
    color: var(--text-color-primary);
    border-radius: 4px;
    padding: 4px 6px;
    border: 1px solid var(--background-color);
    height: 26px;
    font-family: inherit;

    &::placeholder {
      color: var(--text-color-ghost);
    }

    &:hover{
      border: 1px solid var(--border-color-hover-input);
    }

    &:not(textarea) {
      line-height: 1;
      height: 26px;
    }

    &:focus {
      background-color: white;
      border-color: var(--border-color-active);
      outline: 3px solid transparent;
    }
  }

  .custom-input[disabled] {
    color: var(--text-color-disabled);
    cursor: not-allowed;
  }
}
</style>