import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';

const AUTH_ROUTES: Routes = [
    { path: 'auth', redirectTo: 'auth/login', pathMatch: 'full' },
    { path: 'auth/login', component: LoginComponent},
    { path: 'auth/signin', component: SigninComponent}
]

export const authRouting = RouterModule.forChild(AUTH_ROUTES);