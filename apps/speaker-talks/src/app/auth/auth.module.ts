import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import {MatButtonModule} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule,

  ]
})
export class AuthModule {
}
