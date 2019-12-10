import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  }
];


@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    ProfileModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MainModule {
}
