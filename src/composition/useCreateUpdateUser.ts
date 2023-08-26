import {onMounted, ref} from "vue";
import {User} from "../entities/User.ts";
import {Role} from "../entities/Role.ts";
import {useUserCreationService} from "./userServices/useUserCreationService.ts";
import {useUserUpdatingService} from "./userServices/useUserUpdatingService.ts";
import {IUserCreationService} from "../services/user-list/IUserCreationService.ts";
import {IUserUpdatingService} from "../services/user-list/IUserUpdatingService.ts";
import {CreateUserRequestDto} from "../services/user-list/dto/CreateUserRequestDto.ts";

export function useCreateUpdateUser(user?: User | null){

  const userCreationService: IUserCreationService = useUserCreationService()
  const userUpdatingService: IUserUpdatingService = useUserUpdatingService()

  const userData = ref({
    name: '',
    surname: '',
    avatar: '',
    role: {} as Role,
    phoneNumber: '',
  })
  const load = () => {
    if(user){
      userData.value.name = user.name
      userData.value.surname = user.surname
      userData.value.avatar = user.avatar || ''
      userData.value.role = user.role
      userData.value.phoneNumber = user.phoneNumber || ''
    }
  }

  const handleUpdateUser = async (): Promise<void> => {
    if(!user){
      throw Error('we cant update user, haven\'t id')
    }

    await userUpdatingService.updateUser({
      ...userData.value,
      id: user.id,
    })
  }

  const handleCreateUser = async (): Promise<void> => {
    await userCreationService.createUser(userData.value as CreateUserRequestDto)
  }

  onMounted(load)

  return {
    userData,
    handleCreateUser,
    handleUpdateUser
  }
}