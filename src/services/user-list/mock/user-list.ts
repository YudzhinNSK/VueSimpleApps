import {User} from "../../../entities/User.ts";

export const userList: User[] = [
  {
    id: "1",
    name: "John",
    surname: "Doe",
    avatar: "avatar1.jpg",
    role: {
      name: "Начальник",
      id: "11111",
    },
    phoneNumber: '8955555555'
  },
  {
    id: "2",
    name: "Alice",
    surname: "Smith",
    avatar: "avatar2.jpg",
    role: {
      name: "Сотрудник",
      id: "22222",
    },
    phoneNumber: ''
  },
  {
    id: "3",
    name: "Michael",
    surname: "Johnson",
    avatar: "avatar3.jpg",
    role: {
      name: "Сотрудник",
      id: "22222",
    },
    phoneNumber: ''
  },
]