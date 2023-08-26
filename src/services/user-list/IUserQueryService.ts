import {InjectionKey} from "vue";

export interface IUserQueryService {
  getAllUsers(): Promise<string>;
}

export const IUserQueryServiceKey = Symbol() as InjectionKey<IUserQueryService>