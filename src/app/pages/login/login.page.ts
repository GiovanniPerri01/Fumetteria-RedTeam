import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm;
  username:string;
  password:string;

  constructor(private fb:FormBuilder, private servizioLogin:LoginService, private router:Router) {
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
   }

  ngOnInit() {
  }

  login(){
    this.servizioLogin.login(this.username, this.password).subscribe((resp) =>{
      if(resp){
        this.router.navigate(['/home']);
      }
      else{
        alert("asd");
      }
    });
  }

}
