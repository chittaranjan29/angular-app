import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  captureFormData(data:NgForm)
  {
    console.log(data.value.uname);
    console.log(data.value.password);
  }
}
