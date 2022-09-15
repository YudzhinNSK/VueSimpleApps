import {Author} from "../../entities/author";
import {InjectionKey} from "vue";

export interface IAuthorsQueryService {
  queryListAll(): Promise<Author[]>
}

export const IAuthorQueryServiceKey = Symbol() as InjectionKey<IAuthorsQueryService>