import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

  title:string="Welcome to Angular";
  status:boolean=false;


  count:number=0;

  clickCount()
  {
    this.count++;
  }

}
