import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { authRouting } from './auth.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    authRouting
  ],
  declarations: [
    SigninComponent,
    LoginComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
