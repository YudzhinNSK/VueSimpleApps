import {inject} from "vue";
import {IUserUpdatingService, IUserUpdatingServiceKey} from "../../services/user-list/IUserUpdatingService.ts";

export const useUserUpdatingService = () => {
  return inject(IUserUpdatingServiceKey) as IUserUpdatingService
}