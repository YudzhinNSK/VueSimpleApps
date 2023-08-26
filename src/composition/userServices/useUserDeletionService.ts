import {inject} from "vue";
import {IUserDeletionService, IUserDeletionServiceKey} from "../../services/user-list/IUserDeletionService.ts";

export const useUserDeletionService = () => {
  return inject(IUserDeletionServiceKey) as IUserDeletionService
}