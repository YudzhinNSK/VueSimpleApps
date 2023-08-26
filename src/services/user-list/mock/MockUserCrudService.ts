import {IUserQueryService} from "../IUserQueryService.ts";
import {sleep} from "../../../utils/sleep.ts";
import {userList} from "./user-list.ts";
import {IUserCreationService} from "../IUserCreationService.ts";
import {User} from "../../../entities/User.ts";
import {CreateUserRequestDto} from "../dto/CreateUserRequestDto.ts";
import { v4 as uuidv4 } from 'uuid';
import {IUserDeletionService} from "../IUserDeletionService.ts";
import {IUserUpdatingService} from "../IUserUpdatingService.ts";
import {useUsersStore} from "../../../store/usersStore.ts";
import {UpdateUserRequestDto} from "../dto/UpdateUserRequestDto.ts";

export class MockUserCrudService
  implements
    IUserQueryService,
    IUserCreationService,
    IUserDeletionService,
    IUserUpdatingService
{
  _store = useUsersStore()

  async getAllUsers(): Promise<string> {
    await sleep(2000)
    this._store.setUserList(userList)
    return Promise.resolve('ok');
  }

  async createUser(user: CreateUserRequestDto): Promise<string> {
    const newUser: User = {
      ...user,
      id: uuidv4(),
    }
    this._store.addUser(newUser)
    return Promise.resolve('ok')
  }

  async deleteUser(id: string): Promise<string> {
    this._store.deleteUser(id)
    return Promise.resolve("ok");
  }

  async updateUser(user: UpdateUserRequestDto): Promise<void> {
    this._store.updateUser(user)
  }
}