import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  
  simpleForm!:FormGroup;

  ngOnInit(): void {
    this.simpleForm=new FormGroup(
      {
        'name':new FormControl('',[Validators.required]),
        'email':new FormControl('',[Validators.required, Validators.email]),
        'age':new FormControl('',[Validators.required,Validators.pattern ('^[0-9]+$')])
      }
    );
  }


  captureFormData()
  {
    console.log(this.simpleForm.value);
  }
 


}
