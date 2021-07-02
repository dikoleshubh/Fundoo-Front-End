import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Pages/login/login.component';
import { RegistraionComponent } from './Pages/registraion/registraion.component';


const routes: Routes = [
 
  { path : 'login', component: LoginComponent},
  { path : 'registraion', component: RegistraionComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
