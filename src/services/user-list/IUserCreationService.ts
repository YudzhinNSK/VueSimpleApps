import {InjectionKey} from "vue";
import {CreateUserRequestDto} from "./dto/CreateUserRequestDto.ts";

export interface IUserCreationService {
  createUser(user: CreateUserRequestDto): Promise<string>;
}

export const IUserCreationServiceKey = Symbol() as InjectionKey<IUserCreationService>