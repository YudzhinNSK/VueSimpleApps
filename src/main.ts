import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {ApiPostCrudService} from "./services/posts/api/ApiPostCrudService";
import {IPostsQueryServiceKey} from "./services/posts/IPostQueryService";
import {IAuthorQueryServiceKey} from "./services/authors/IAuthorsQueryService";
import {ApiAuthorCrudService} from "./services/authors/api/ApiAuthorCrudService";


const app = createApp(App)


const apiPostsCrudService = new ApiPostCrudService('https://jsonplaceholder.typicode.com')
const apiAuthorsCrudService = new ApiAuthorCrudService('https://jsonplaceholder.typicode.com')

app.provide(IPostsQueryServiceKey, apiPostsCrudService)
app.provide(IAuthorQueryServiceKey, apiAuthorsCrudService)

app.mount('#app')