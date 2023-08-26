import {InjectionKey} from "vue";
import {UpdateUserRequestDto} from "./dto/UpdateUserRequestDto.ts";

export interface IUserUpdatingService {
  updateUser(user: UpdateUserRequestDto): Promise<void>;
}

export const IUserUpdatingServiceKey = Symbol() as InjectionKey<IUserUpdatingService>