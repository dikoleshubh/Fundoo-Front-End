import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NotedashboardComponent } from './notedashboard/notedashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

import { LoginComponent } from './login/login.component';
import { NewnoteComponent } from './newnote/newnote.component';
import { NoteComponent } from './note/note.component';

import { RegistraionComponent } from './registraion/registraion.component';

const routes: Routes = [
  
  { path : 'login', component: LoginComponent},
  { path : 'registraion', component: RegistraionComponent },
  { path : 'forgetpassword', component: ForgetpasswordComponent },
  
  {path:"dashboard",component:DashboardComponent,
  children:[
    
    { 
     path:'', redirectTo:'note', pathMatch:'full' 
   },
   { 
     path: 'note', 
     component: NoteComponent 
   },
  
   {path:"newnote",component:NewnoteComponent}
  ]}
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
