<template>
  <div class="user-editor-form-wrapper">
    <Input v-model="userData.avatar" top-label="Аватар"/>
    <Input v-model="userData.name" top-label="Имя *"/>
    <Input v-model="userData.surname" top-label="Фамилия"/>
    <Dropdown
      item-id="user-role"
      v-model="userData.role"
      :options-list="rolesList"
      top-label="Должность *"
      :disabled="!!user"
    />
    <Input
      v-if="showPhoneNumber"
      v-model="userData.phoneNumber"
      top-label="Номер телефона"
      mask="^\d{0,11}$"
      :max-len="11"
    />
    <div class="actions">
      <button @click="handleSaveUser">
        {{ user ? 'Сохранить' : 'Создать' }}
      </button>
      <button @click="handleCancel">
        Отменить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Input from "../common/Input/Input.vue";
import Dropdown, {DropdownOptions} from "../common/Dropdown/dropdown.vue";
import {User} from "../../entities/User.ts";
import {useCreateUpdateUser} from "../../composition/useCreateUpdateUser.ts";
import {computed} from "vue";

const props = defineProps<{
  user?: User | null
}>()

const emits = defineEmits<{
  (e: 'close-modal') : void
}>()

const rolesList: DropdownOptions[] = [
  {
    name: 'Начальник',
    id: '11111'
  },
  {
    name: 'Сотрудник',
    id: '22222'
  }
]

const {
  userData,
  handleCreateUser,
  handleUpdateUser,
} = useCreateUpdateUser(props.user)
const showPhoneNumber = computed(() => (userData.value.role?.id === '11111'))

const handleSaveUser = () => {
  if(!validateBeforeSave()){
    alert('Проверьте ввод имени и выбор должности')
    return
  }
  if(!props.user) handleCreateUser()
  else handleUpdateUser()

  emits('close-modal')
}

const validateBeforeSave = () =>{
  if(!userData.value.role) return false
  if(!userData.value.name) return false

  return true
}

const handleCancel = () => {
  emits('close-modal')
}
</script>

<style lang="scss">
.user-editor-form-wrapper{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .actions{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 18px;
    margin-right: 15px;
  }
}
</style>