import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './dal/services/auth.guard';


const routes: Routes = [{
  path: "",
  component: DashboardComponent,
  canActivate: [AuthGuard],
  children:[
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    {
      path: 'users', 
      loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    },
    { path: 'page2', loadChildren: () => import('./page2/page2.module').then(m => m.Page2Module) },
    { path: 'page3', loadChildren: () => import('./page3/page3.module').then(m => m.Page3Module) }
  
  ]

}, 
{ 
  path: 'auth', 
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
