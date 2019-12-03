import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { StoreModule } from '@ngrx/store';
import { registrationReducer } from './store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/auth.effects';
import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthService
  ],
  imports: [
    AngularFireAuthModule,
    SharedModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('AUTH', { profile: registrationReducer }),
    CommonModule
  ]
})
export class AuthModule {
}
