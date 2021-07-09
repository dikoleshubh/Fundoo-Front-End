import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClarityModule } from '@clr/angular';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatButtonModule } from '@angular/material/button';
import { RegistraionComponent } from './Pages/registraion/registraion.component';
//import { RegistersComponent } from './registers/registers.component';
import {MatIconModule} from '@angular/material/icon';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
//import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NotehomeComponent } from './notehome/notehome.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistraionComponent,
    ForgetpasswordComponent,
    DashboardComponent,
    SidenavComponent,
    NotehomeComponent,
    //SidenavigatorComponent,
   // HeaderComponent,
    
    
    //RegistersComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    MatSnackBarModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
     MatButtonModule,
     MatSidenavModule,
    MatDividerModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],

  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }





