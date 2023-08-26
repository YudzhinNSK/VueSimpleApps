import { Role } from "./Role.ts";

export type User = {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  phoneNumber: string;
  role: Role;
}