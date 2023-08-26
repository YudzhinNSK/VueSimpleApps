import {Role} from "../../../entities/Role.ts";

export type CreateUserRequestDto = {
  name: string;
  surname: string;
  avatar: string;
  role: Role;
  phoneNumber: '';
}