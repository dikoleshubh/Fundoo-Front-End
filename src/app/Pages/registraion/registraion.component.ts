import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {FormBuilder, FormGroup, FormControl, Validators,} from '@angular/forms';
import { UserserviceService } from 'src/app/Services/user/user.service';

@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.scss']
})

export class RegistraionComponent implements OnInit {


    constructor(private service: UserserviceService) {
     
     }
  
    form = new FormGroup({
      FirstName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      LastName: new FormControl('', [Validators.required, Validators.minLength(1)]),
      Email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(1)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(1)])
      
    })
  
    hideme : Boolean = true
    
  
    ngOnInit(): void {
    }
    
    TogglePassword(){
      this.hideme = this.hideme ? false : true 
    }
    
  
    get f() {
      return this.form.controls;
    }
  
    passType: string = 'password';
// Password Showcase 
    toggleshow(){
    if(this.passType== 'password'){
    this.passType= 'text'
    }else{
    this.passType== 'password'
    }
    }
  //Submit Model
    submit() {
      console.log(this.form.valid);
      if (this.form.valid){
  
        let data = {
          "firstName": this.form.controls.firstName.value,
          "lastName": this.form.controls.lastName.value,
          "email": this.form.controls.email.value,
          "service": "advance",
          "password": this.form.controls.password.value,
        }
        this.service. registerUser(data).subscribe((data) => {
          console.log(data);
  
        })
      }
    }
  
  }
 