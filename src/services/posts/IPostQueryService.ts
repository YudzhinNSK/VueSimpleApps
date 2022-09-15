import {Post} from "../../entities/post";
import {QueryPostsListRequestDto} from "./dto/QueryPostsListRequestDto";
import {InjectionKey} from "vue";

export interface IPostQueryService {
  queryList(query: QueryPostsListRequestDto): Promise<Post[]>
}

export const IPostsQueryServiceKey = Symbol() as InjectionKey<IPostQueryService>