import {InjectionKey} from "vue";

export interface IUserDeletionService {
  deleteUser(id: string): Promise<string>;
}

export const IUserDeletionServiceKey = Symbol() as InjectionKey<IUserDeletionService>