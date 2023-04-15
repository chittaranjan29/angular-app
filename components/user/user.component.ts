import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users: any[] = [];

  constructor(private userService:UserService)
  {
   
  }
  
  getUserdData()
  {
    this.userService.getUsersInformation().subscribe(
      response => {
        console.log(response.data)
        this.users=response.data;
      }
    );

  }


}
