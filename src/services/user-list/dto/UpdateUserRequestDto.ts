import {Role} from "../../../entities/Role.ts";

export type UpdateUserRequestDto = {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  role: Role;
  phoneNumber: string;
}