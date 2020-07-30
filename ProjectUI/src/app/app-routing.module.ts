import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [{
  path: "",
  component: DashboardComponent,
}, 
{ 
  path: 'auth', 
  loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
},
{
  path: 'users', 
  canActivate: [AuthGuard],
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
