import {IAuthorsQueryService} from "../IAuthorsQueryService";
import {Author} from "../../../entities/author";


export class ApiAuthorCrudService implements IAuthorsQueryService{

  private readonly _serviceUrl: string

  constructor(serviceUrl: string) {
    this._serviceUrl = serviceUrl
  }

  async queryListAll(): Promise<Author[]> {

    const response = await fetch(`${this._serviceUrl}/users`)

    if(response.status !== 200){
      throw new Error(`Relay creation error: ${await response.text()}`)
    }

    return await response.json() as Author[];
  }

}