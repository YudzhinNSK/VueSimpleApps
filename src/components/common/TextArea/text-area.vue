<template>
  <div class="custom-textarea">
    <div class="custom-label">
      <div
        class="custom-label__text"
        :class="{'--active': isActive || modelValue}"
      >
        {{ label }}
      </div>
    </div>
    <textarea
      class="custom-input"
      :class="{'--focused': isActive}"
      :value="inputValue"
      @input="(e) => handleInputEvent(e as InputEvent)"
      @focus="() => isActive = true"
      @blur="isActive = modelValue !== ''"
    ></textarea>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from "vue";

const props = defineProps<{
  modelValue: number | string;
  label?: string;
}>();

const isActive = ref(false);
const inputValue = computed(() => (props.modelValue))
const emits = defineEmits<{
  (e: 'update:model-value', value: number | string): void
}>()

const handleInputEvent = (event: InputEvent): void => {
  let value = (event.target as HTMLInputElement).value;
  emits('update:model-value', value)
}
</script>

<style scoped lang="scss">
.custom-textarea {
  position: relative;
  margin-bottom: 20px;
  display: flex;
  width: 100%;

  .custom-label, .custom-input {
    transition: background-color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
  }

  &:hover {
    .custom-label {
      background-color: #d8d8d8;
    }
    .custom-input {
      background-color: #d8d8d8;
      border-bottom: 2px solid #6f6f6f;
    }
  }
  //
  //  .custom-input {
  //    background-color: #d8d8d8;
  //    border-bottom: 2px solid #6f6f6f;
  //  }
  //}

  .custom-label {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    max-width: 100%;
    color: #1f1f1f80;
    font-size: 16px;
    background-color: #e3e3e3;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;

    -webkit-mask-image: linear-gradient(to top,
      transparent,
      transparent 1px,
      #e3e3e3 11px);

    &__text {
      max-width: 90%;
      width: fit-content;
      margin-left: 12px;
      overflow-y: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      pointer-events: none;
      transform: scale(1);
      transform-origin: top left;
      transition: transform 0.3s ease-in-out;

      &.--active{
        color: var(--text-color-primary);
        transform: scale(0.8);
      }
    }
  }

  .custom-input {
    min-height: 100px;
    padding: 25px 12px 10px 12px;
    font-size: 16px;
    border: none;
    resize: vertical;
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border-bottom: 2px solid #B4B4B4;
    background-color: #e3e3e3;
    transition: background-color 0.3s ease-in-out, border-bottom 0.3s ease-in-out;
    -webkit-mask-image: linear-gradient(to bottom,
      transparent,
      transparent 5px,
      #e3e3e3 23px);


    //&:hover {
    //  background-color: #d8d8d8;
    //  border-bottom: 2px solid #6f6f6f;
    //}

    &:focus-visible {
      outline: none;
    }

    .custom-input:focus-within::after {
      width: 100%;
    }

    &.--focused{
      border: none;
      border-bottom: 2px solid black;
    }
  }
}
</style>