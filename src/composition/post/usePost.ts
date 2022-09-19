import {onMounted, Ref, ref} from "vue";
import usePostsQueryService from "./usePostsQueryService";
import {Post} from "../../entities/post";
import {QueryPostsListRequestDto} from "../../services/posts/dto/QueryPostsListRequestDto";
import {Author} from "../../entities/author";
import useAuthorQueryService from "../author/useAuthorQueryService";

export enum LoadingStatus {
  Loading,
  Success,
  NotFound,
  Error,
}

export function usePost(){

  const status = ref<LoadingStatus>(LoadingStatus.Success)
  const postsQueryService = usePostsQueryService()
  const authorQueryService = useAuthorQueryService()

  const query: Ref<QueryPostsListRequestDto> = ref({})

  const postsList = ref<Post[]>([])
  const authors = ref<Author[]>([])

  const firstLoad = async () => {
    await loadPosts()
    await loadAuthors()
    preparePostList()
  }

  const searchByAuthorName = async (name: string) => {
    if(!name) {
      query.value = {}
      await loadPosts()
      preparePostList()
      return
    }

    const authorIds = authors.value.filter((author) => author.name.toLowerCase().includes(name.toLowerCase())).map((item) => item.id) || null

    console.log(authorIds)

    if(!authorIds) {
      postsList.value = []
      return
    }

    query.value = {
      userIds: authorIds
    }

    await loadPosts()
    preparePostList()
    return
  }

  const loadPosts = async () => {
    status.value = LoadingStatus.Loading

    try {
      const result = await postsQueryService.queryList(query.value)

      if(result === null){
        status.value = LoadingStatus.NotFound
        return
      }

      postsList.value = result
      status.value = LoadingStatus.Success
    } catch (e) {
      console.error(e)
      status.value = LoadingStatus.Error
    }
  }

  const loadAuthors = async () => {
    status.value = LoadingStatus.Loading

    try {
      const result = await authorQueryService.queryListAll()

      if(result === null){
        status.value = LoadingStatus.NotFound
        return
      }

      authors.value = result
      status.value = LoadingStatus.Success
    } catch (e) {
      console.error(e)
      status.value = LoadingStatus.Error
    }
  }

  const preparePostList = () => {
    status.value = LoadingStatus.Loading
    if(!postsList.value.length || !authors.value.length) return

    const newPosts: Post[] = postsList.value.map(setAuthor)

    postsList.value = [...newPosts]
    status.value = LoadingStatus.Success

  }

  const setAuthor = (post: Post): Post => {
    return {
      ...post,
      authorName: authors.value.find((author) => author.id === post.userId)?.name || ''
    }
  }

  onMounted(firstLoad)

  return {
    status,
    postsList,
    searchByAuthorName
  }
}