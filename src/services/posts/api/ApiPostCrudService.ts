import {IPostQueryService} from "../IPostQueryService";
import {Post} from "../../../entities/post";
import {QueryPostsListRequestDto} from "../dto/QueryPostsListRequestDto";


export class ApiPostCrudService implements IPostQueryService {

  private readonly _serviceUrl: string

  constructor(serviceUrl: string) {
    this._serviceUrl = serviceUrl
  }

  async queryList(query: QueryPostsListRequestDto): Promise<Post[]> {

    let url = `${this._serviceUrl}/posts`

    if(query.userId){
      url += `?userId=${query.userId}`
    }

    const response = await fetch(url)

    if(response.status !== 200){
      throw new Error(`Relay creation error: ${await response.text()}`)
    }

    return await response.json() as Post[];
  }

}