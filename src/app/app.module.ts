import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Pages/app-routing.module';
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

import {MatIconModule} from '@angular/material/icon';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';




import { NoteComponent } from './Pages/note/note.component';
import { NewnoteComponent } from './Pages/newnote/newnote.component';
import { GetnoteComponent } from './Pages/getnote/getnote.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistraionComponent,
    ForgetpasswordComponent,
    DashboardComponent,
   
  NewnoteComponent,
  GetnoteComponent,
  NoteComponent
       
    
    
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





