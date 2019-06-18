import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { AdminComponent } from './views/admin/admin.component';
import { LoginComponent } from './views/login/login.component';
import { SignupComponent } from './views/login/signup.component'
import { ProductDetailsComponent } from './views/dashboard/product.details.component'

import { FormsModule } from '@angular/forms';
import { FlexLayoutModule} from '@angular/flex-layout';
import { HttpClientModule} from '@angular/common/http';
import { RestService} from './services/app.service';
import { AuthService} from './services/auth.service';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [RestService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
