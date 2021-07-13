import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-getnote',
  templateUrl: './getnote.component.html',
  styleUrls: ['./getnote.component.scss']
})


export class GetnoteComponent implements OnInit {
  @Input() notes: any;
  

  constructor( ) { 
    
  }


  ngOnInit(): void {
    console.log(this.notes)
  }

  
  
}
