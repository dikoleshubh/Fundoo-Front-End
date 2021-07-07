import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators,} from '@angular/forms';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


import { UserserviceService } from 'src/app/Services/user/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isActive: boolean;
  loginForm:FormGroup
  public Email: string = '.com';
 
 
  constructor(private FormBuilder:FormBuilder,private Userservice:UserserviceService,
    public snackBar: MatSnackBar, private route: Router) { 
    this.loginForm = this.FormBuilder.group(
      {
        Email: new FormControl('', [Validators.required, 
         // Validators.pattern('^[a-zA-Z0-9]+([._+-][a-zA-Z0-9]+)*$')
        ]),
        Password:  new FormControl('', [Validators.required, 
          //Validators.pattern('^(?=.{8,20}$)(?=.*[\\d])(?=.*[A-Z])[\\w]*[\\W][\\w]*$')
        ]),}
    );   
    this.isActive = true;
  } 
  ngOnInit(): void {
  }
  TogglePassword(){
    this.isActive = this.isActive ? false : true 
  }
  //Opening  Snack bar with particular message .
  openSnackBar(message: string, duration: number) {
    let config = new MatSnackBarConfig();
    if (duration != 0)
    {
      config.duration = duration; 
    }
    this.snackBar.open(message, undefined, config);
  }

  login() {
    
    
    if(this.loginForm.valid){
      console.log('SET up');
      this.openSnackBar('Login in...', 0);
      let reqData ={
        Email: this.loginForm.get('Email')?.value+this.Email,
        Password: this.loginForm.get('Password')?.value
        
        
      }
      this.Userservice.loginUser(reqData).subscribe(
        (response: any) => {
          localStorage.setItem('FunDooJwt', response['token']);
          this.openSnackBar('Login success', 2000);
          this.route.navigate(['Dashboard']);
        },
        (error:any) => {
          try {
            if(error['status'] == 0){
              this.openSnackBar('Login failed: server offline', 2000,);
            }
            else{
              this.openSnackBar('Login failed: '+error['error']['message'], 2000,);
            }
            } catch (error) {

          }
        });
    } 
  }
}