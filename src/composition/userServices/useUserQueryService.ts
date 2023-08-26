import {IUserQueryService, IUserQueryServiceKey} from "../../services/user-list/IUserQueryService.ts";
import {inject} from "vue";

export const useUserQueryService = () => {
  return inject(IUserQueryServiceKey) as IUserQueryService
}