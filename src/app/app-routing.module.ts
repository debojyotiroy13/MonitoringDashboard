import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component'
import { AdminComponent } from './views/admin/admin.component'
import { LoginComponent } from './views/login/login.component'
import { SignupComponent } from './views/login/signup.component'
import { ProductDetailsComponent } from './views/dashboard/product.details.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'admin', component: AdminComponent , canActivate:[]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: DashboardComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}



