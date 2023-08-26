import {inject} from "vue";
import {IUserCreationService, IUserCreationServiceKey} from "../../services/user-list/IUserCreationService.ts";

export const useUserCreationService = () => {
  return inject(IUserCreationServiceKey) as IUserCreationService
}