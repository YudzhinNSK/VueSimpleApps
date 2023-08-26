<template>
  <div class="custom-modal-overlay" v-if="isOpen" @click="() => emits('close-modal')">
    <div class="custom-modal" @click.stop>
      <button class="close-button" @click="closeModal">х</button>
      <div class="custom-modal__title">{{ title }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    isOpen: boolean;
    title?: string;
}>();

const emits = defineEmits<{
  (e: "close-modal"): void;
}>()

const closeModal = () => {
  emits("close-modal")
};
</script>

<style lang="scss" scoped>
.custom-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .custom-modal {
    background-color: white;
    min-width: 400px;
    min-height: 150px;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .close-button {
      position: absolute;
      top: 9px;
      right: 9px;

      background: none;
      border: none;
      cursor: pointer;
      margin-bottom: 10px;
    }

    &__title {
      display: flex;
      align-items: center;
      margin-right: 30px;
    }
  }
}

</style>