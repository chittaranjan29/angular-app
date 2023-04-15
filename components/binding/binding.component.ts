import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  name:string="";
  clear()
  {
    this.name="";
  }


  value:any="";
  clearValue()
  {
    this.value="";
  }

}
