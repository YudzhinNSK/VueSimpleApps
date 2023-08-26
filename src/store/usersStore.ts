import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {User} from "../entities/User.ts";


export const useUsersStore = defineStore('usersStore', () => {
  const usersList: Ref<User[]> = ref([])

  function setUserList(users: User[]): void {
    usersList.value = users
  }
  function deleteUser(id: string): void {
    usersList.value = usersList.value.filter((item) => item.id !== id)
  }

  function addUser(user: User): void {
    usersList.value.push(user)
  }

  function updateUser(newUserData: User): void {
    const index = usersList.value.findIndex((user) => user.id === newUserData.id)

    if(index === -1) return

    usersList.value[index] = newUserData
  }

  return {
    usersList,
    setUserList,
    addUser,
    deleteUser,
    updateUser
  }
})