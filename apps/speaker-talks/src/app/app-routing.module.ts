import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AppAuthGuard } from './services/app-auth-guard.service';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
      }
    ]
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [
      AppAuthGuard
    ],
    loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)
  }
  // {
  //   path: '**',
  //   redirectTo: '/auth',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
