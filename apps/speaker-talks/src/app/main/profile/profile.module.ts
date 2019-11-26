import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  }
];


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProfileModule { }
