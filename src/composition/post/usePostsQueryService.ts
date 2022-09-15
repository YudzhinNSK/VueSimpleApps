import {inject} from "vue";
import {IPostQueryService, IPostsQueryServiceKey} from "../../services/posts/IPostQueryService";

const usePostsQueryService = () => {
  return inject(IPostsQueryServiceKey) as IPostQueryService
}

export default usePostsQueryService