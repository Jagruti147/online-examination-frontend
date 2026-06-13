import { Component } from '@angular/core';
import { User } from '../login.service';
import { RegistrationService } from '../registration.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  user:User=new User('', '', 0, 'd');
  constructor(private services:RegistrationService,private router:Router)
  {

  }
 
  saveUser()
  {
this.services.saveUser(this.user).subscribe(answer=>{
 
  sessionStorage.setItem("message","registation successful....");
  
  this.router.navigate(['login'])});
  }
}
