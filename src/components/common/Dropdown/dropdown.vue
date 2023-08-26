<template>
  <div class="dropdown-wrapper">
    <span v-if="topLabel">
      {{topLabel}}
    </span>
    <div class="dropdown-wrapper__dropdown">
      <div
        :id="`${itemId}-options-list-button`"
        class="dropdown-wrapper__dropdown__option "
        :class="{
          '--disabled': disabled
        }"
        @click="handleOpenOptions">
        <div>
          {{ modelValue?.name }}
        </div>
        <div
          class="arrow"
          :class="{
          '--bottom': !isOptionsListOpen,
          '--top': isOptionsListOpen,
          '--disabled': disabled
        }"
        />
      </div>
      <div
        :id="`${itemId}-options-list`"
        class="dropdown-wrapper__dropdown__options-list-modal"
        v-show="isOptionsListOpen"
      >
        <div
          v-for="(item, index) in optionsList"
          class="options-item"
          :class="{
            '--active': item.id === modelValue?.id
        }"
          :key="`${index}_${item.id}`"
          @click="() => handleChange(item)"
        >
          {{item.name}}
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import {ref, watch} from "vue";
import {useClickOutside} from "../../../utils/useClickOutside.ts";

export type DropdownOptions = {
  name: string,
  id: string,
}

const props = defineProps<
  {
    itemId: string,
    optionsList?: DropdownOptions[],
    modelValue: DropdownOptions | null,
    topLabel?: string,
    disabled?: boolean
  }
>()

const emits = defineEmits<{
  (e: 'update:modelValue', item: DropdownOptions): void
}>()

const isOptionsListOpen = ref(false)

const {
  isClickedOutside,
  setDefault
} = useClickOutside({ids: [`${props.itemId}-options-list-button`, `${props.itemId}-options-list`]})

watch(() => isClickedOutside.value, () => {
  if(isClickedOutside.value) isOptionsListOpen.value = false
})

const handleOpenOptions = () => {
  if(props.disabled) return
  if(!isOptionsListOpen.value) setDefault()
  isOptionsListOpen.value = !isOptionsListOpen.value
}

const handleChange = (item: DropdownOptions): void => {
  isOptionsListOpen.value = false
  emits('update:modelValue', item)
}
</script>

<style lang="scss">
.dropdown-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;

  &__dropdown{
    position: relative;

    &__option {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      min-width: 120px;
      height: 26px;
      border-radius: 4px;
      background-color: var(--background-color);
      cursor: pointer;
      width: fit-content;
      padding: 3px 12px;

      &.--disabled {
        cursor: not-allowed;
        color: var(--text-color-ghost);
      }
    }

    .arrow{
      width: 7px;
      height: 7px;
      border-right: 2px solid var(--border-color-active);
      border-bottom: 2px solid var(--border-color-active);
      cursor: pointer;

      &.--disabled {
        border-right: 2px solid var(--text-color-ghost);
        border-bottom: 2px solid var(--text-color-ghost);
      }

      &.--bottom {
        transform: rotate(45deg);
        margin-bottom: 2px;
      }

      &.--top {
        transform: rotate(-135deg);
        margin-top: 2px;
      }
    }

    &__options-list-modal {
      position: absolute;
      z-index: 2;
      border-radius: 4px;
      background: #FFF;
      box-shadow: 0 4px 4px 0 rgba(153, 153, 153, 0.25);
      display: flex;
      flex-direction: column;
      min-width: 80px;
      max-height: 150px;
      overflow-y: overlay;
      overflow-x: hidden;
      top: 34px;

      .options-item{
        width: 100%;
        min-height: 25px;
        padding-left: 10px;
        padding-right: 20px;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 250px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        &:hover {
          background-color: var(--background-color);
        }

        &.--disabled {
          cursor: not-allowed;
          color: var(--text-color-ghost);
        }

        &.--active {
          color: white;
          background-color: var(--element-color-active);
        }

        &:first-child{
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }

        &:last-child {
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }

}
</style>