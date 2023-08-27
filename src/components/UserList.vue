<template>
  <div class="user-list-wrapper">
    <div class="user-list-wrapper__actions">
      <button @click="handleIsModalOpenChange">
        Добавить пользователя
      </button>
      <label
        class="show-user"
      >
        <span>Показывать фамилии</span>
        <input
          type="checkbox"
          v-model="isShowFullName"
          @click="handleIsShowFullNameChange"
        />
      </label>
      <modal
        :is-open="isModalOpen"
        @close-modal="handleIsModalOpenChange"
        :title="isEditMode ? 'Редактировать пользователя' : 'Создать пользователя'"
      >
        <user-editor-form
          :user="userToUpdate"
          @close-modal="handleIsModalOpenChange"
        />
      </modal>
    </div>
    <div class="user-list-wrapper__users">
      <div
        class="user"
        v-for="user in usersList"
        :key="user.id"
      >
        <div class="user__information">
          {{ prepareUserInfo(user) }}
        </div>
        <div class="user__actions">
          <div class="action --edit" @click="() => handleEditUser(user)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="48">
              <path fill="currentColor" d="M180-180h44l443-443-44-44-443 443v44Zm614-486L666-794l42-42q17-17 42-17t42 17l44 44q17 17 17 42t-17 42l-42 42Zm-42 42L248-120H120v-128l504-504 128 128Zm-107-21-22-22 44 44-22-22Z"/>
            </svg>
          </div>
          <div class="action --delete" @click="() => handleDeleteUser(user.id)">
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="48">
              <path fill="currentColor" d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, Ref} from "vue";
import {User} from "../entities/User.ts";
import Modal from "./common/Modal/modal.vue";
import UserEditorForm from "./userEditor/user-editor-form.vue";
import {useUserQueryService} from "../composition/userServices/useUserQueryService.ts";
import {useUsersStore} from "../store/usersStore.ts";
import {useUserDeletionService} from "../composition/userServices/useUserDeletionService.ts";

const usersStore = useUsersStore()
const userQueryService = useUserQueryService()
const userDeletionService = useUserDeletionService()

const isShowFullName : Ref<boolean> = ref(false)
const isModalOpen: Ref<boolean> = ref(false)
const isEditMode: Ref<boolean> = ref(false)
const userToUpdate: Ref<User | null> = ref(null)
const usersList = computed(() => (usersStore.usersList))

const handleIsModalOpenChange = (): void => {
  if(userToUpdate.value && isModalOpen.value) userToUpdate.value = null
  isModalOpen.value = !isModalOpen.value
  if(isEditMode.value) isEditMode.value = false
}

const handleIsShowFullNameChange = () => {
  isShowFullName.value = !isShowFullName.value
}

const prepareUserInfo = (user: User) : string => (isShowFullName.value ? `${user.name} ${user.surname}` : user.name)

const handleEditUser = (user: User): void => {
  userToUpdate.value = user
  handleIsModalOpenChange()
  isEditMode.value = true
}

const handleDeleteUser = async (id: string): Promise<void> => {
  await userDeletionService.deleteUser(id)
}

const fetchUsersList = async () => {
  try{
    await userQueryService.getAllUsers()
  } catch (e) {
    console.error(e)
  }
}

onMounted(fetchUsersList)
</script>

<style lang="scss" scoped>
.user-list-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 12px;
  background-color: white;
  margin: auto;
  padding: 15px 15px;

  min-width: 900px;
  width: 80%;
  min-height: 500px;
  height: 80%;

  &__actions {
    display: flex;
    flex-direction: row;
    gap: 20px;

    .show-user {
      display: flex;
      flex-direction: row;
      gap: 6px;
    }
  }

  &__users {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    gap: 12px;

    overflow-y: auto;

    .user {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      min-height: 40px;
      border-bottom: 1px solid var(--border-color);

      &:last-child {
        border-bottom: none;
      }

      &__information{
        display: flex;
        align-items: center;
      }

      &__actions {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        margin-right: 25px;

        .action {
          display: flex;
          width: 24px;
          height: 24px;

          cursor: pointer;

          &.--edit {
            color: var(--element-color-unactive);

            &:hover {
              color: var(--text-color-primary);
            }
          }

          &.--delete{
            color: var(--elemenet-color-delete-unactive);

            &:hover {
              color: var(--elemenet-color-delete-active);
            }
          }
        }
      }
    }

  }

}
</style>
