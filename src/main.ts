import { createApp } from 'vue'
import './assets/stylesheets/application.scss'
import App from './App.vue'
import {MockUserCrudService} from "./services/user-list/mock/MockUserCrudService.ts";
import {IUserQueryServiceKey} from "./services/user-list/IUserQueryService.ts";
import {IUserCreationServiceKey} from "./services/user-list/IUserCreationService.ts";
import {IUserDeletionServiceKey} from "./services/user-list/IUserDeletionService.ts";
import {IUserUpdatingServiceKey} from "./services/user-list/IUserUpdatingService.ts";
import {createPinia} from "pinia";
import router from './router/root.ts';

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

const mockUserService: MockUserCrudService  = new MockUserCrudService()
app.provide(IUserQueryServiceKey, mockUserService)
app.provide(IUserCreationServiceKey, mockUserService)
app.provide(IUserDeletionServiceKey, mockUserService)
app.provide(IUserUpdatingServiceKey, mockUserService)

app.mount('#app')