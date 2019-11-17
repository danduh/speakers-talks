import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
      }
    ]
  },
  // {
  //   path: 'main',
  //   loadChildren: () => import('./main/main.module').then(mod => mod.MainModule),
  // },
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
