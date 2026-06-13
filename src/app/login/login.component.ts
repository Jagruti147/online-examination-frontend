import { Component,OnInit } from '@angular/core';
import { LoginService, User } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent 
{
user: User=new User('','',0,'d');
message: any='';
subject:any='';


constructor(private services:LoginService,private router:Router)
{
this.message=sessionStorage.getItem("message");
}
validate()
{
  this.services.validate(this.user).subscribe(answer=>{
  
if(answer)
{
 sessionStorage.setItem("message", "welcome"   +this.user.username);
 sessionStorage.setItem("subject",this.subject);
 this.router.navigate(['question'])
}
else{
  sessionStorage.setItem("message","wrong credentials");

  this.router.navigate(['login'])
}

  })
}
  

}
   
  

