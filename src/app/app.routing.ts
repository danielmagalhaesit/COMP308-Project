import { AuthComponent } from './auth/auth.component';
import { PostsComponent } from './posts/posts.component';
import { Routes, RouterModule } from "@angular/router";


const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full' },
    { path: 'posts', component: PostsComponent },
    { path: 'auth', component: AuthComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);