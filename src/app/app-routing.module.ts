import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NotedashboardComponent } from './notedashboard/notedashboard.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { ForgetpasswordComponent } from './Pages/forgetpassword/forgetpassword.component';

import { LoginComponent } from './Pages/login/login.component';
import { RegistraionComponent } from './Pages/registraion/registraion.component';
//import { HomeComponent } from './home/home.component';

const routes: Routes = [
  
  { path : 'login', component: LoginComponent},
  { path : 'registraion', component: RegistraionComponent },
  { path : 'forgetpassword', component: ForgetpasswordComponent },
  { path : 'dashboard', component:  DashboardComponent },
  //{ path : 'sidenavigator', component:  SidenavigatorComponent },
  //{ path : 'header', component:  HeaderComponent },
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
