import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 title:string="User Login";
 url:string="../assets/angular.png";  
 greeting():string
 {
  return "Welcome User";
 }
}
