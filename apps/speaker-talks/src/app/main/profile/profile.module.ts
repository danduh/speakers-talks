import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProfileService } from './services/profile.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileEffects } from './store/profile.effects';
import { profileReducer } from './store/profile.reducer';

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
    EffectsModule.forFeature([ProfileEffects]),
    StoreModule.forFeature('PROFILE', { profile: profileReducer }),
    SharedModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule {
}
