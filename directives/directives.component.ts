import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  names:string[]=['Anil','Aman','Ankit'];
  status:boolean=false;
  day:number=1;
}
