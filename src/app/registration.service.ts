import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class User
{
  username: String; 
  password: String;
  mobno: number;
  emailid: String;

  constructor(username:String,password:string,mobno:number,emailid:String){
    this.username= username;
    this.password=password;
    this.mobno=mobno;
    this.emailid=emailid
  }

}
@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpclient:HttpClient) { }


  saveUser(user:User){
return this.httpclient.post<boolean>("http://localhost:8080/saveUser",user);
  }
}
