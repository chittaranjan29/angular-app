import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  users:any[] | undefined;
  url:string="https://reqres.in/api/users?page=2";

  constructor(private http:HttpClient) { }

  getUsersInformation():Observable<any> //Publisher
  {
    
    return this.http.get(this.url);
    
  }
}
