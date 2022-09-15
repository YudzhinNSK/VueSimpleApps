import {inject} from "vue";
import {IAuthorQueryServiceKey, IAuthorsQueryService} from "../../services/authors/IAuthorsQueryService";

const useAuthorQueryService = () => {
  return inject(IAuthorQueryServiceKey) as IAuthorsQueryService
}

export default useAuthorQueryService