import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export class User{
  username:string;
  password:string;
  mobno: number;
  emailid: string;


  constructor(username:string,password:string,mobno:number,emailid:string){
this.username= username;
this.password= password;
this.mobno=mobno;
this.emailid=emailid;

  }
}
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  message:any='';
  constructor(private httpclieant:HttpClient)
  {
  this.message= sessionStorage.getItem("message");
  
  }
  validate(user:User)
  {
 return this.httpclieant.post<boolean>("http://localhost:8080/validate",user);
  }

}
