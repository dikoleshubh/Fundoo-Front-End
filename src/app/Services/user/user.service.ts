import { Injectable } from '@angular/core';

import {HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpServiceService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  helper = new JwtHelperService();
  constructor(private Https:HttpServiceService) { }
    registerUser(data:any) {
      console.log(" data in user services ", data );
      return this.Https.post('/Users/Register', data,null);
      
    }
    loginUser(data:any) {
      console.log(" login user services ", data );
      return this.Https.post('/User/login', data,null);
     //return this.Https.post(`${user.url}User/login`, data);
    }
    

    
  forgetUser(data:any) {
    console.log(" forget user services ", data );
    return this.Https.post('/User/ForgetPassword', data,null);
  }
    
  
  resetUser(data:any) {
    console.log(" reset user services ", data );
    let headers = new HttpHeaders()
    .set('Authorization', 'Bearer '+localStorage.getItem('FunDooNotesJWT'));  
    let options = { headers: headers };
    return this.Https.post('/User/Resetpassword', data,options);
  }
  authenticateUser(){
    // const token = localStorage.getItem("FunDooNotesJWT")
    // const isExpired = this.helper.isTokenExpired(token || undefined);
    // return !isExpired;
    return !!localStorage.getItem("FunDooNotesJWT")
  }
}