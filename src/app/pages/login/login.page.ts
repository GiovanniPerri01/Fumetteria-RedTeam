import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from 'src/app/model/package/dto/user-dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm; //si riferisce al nome del FormGroup

  constructor(private fb:FormBuilder, private servizioLogin:LoginService, private router:Router) {
  //abbiamo creato un oggetto fb di tipo FormBuilder per poter verificare che i campi siano presenti e validi
  //username e password; 
  // per l'username viene richiesta la validazione di tipo email;
  //per la password una lunghezza minima di 8 caratteri;
    this.loginForm = fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
   }  

  ngOnInit() {
  }

  login(){
    this.servizioLogin.login(this.loginForm.controls.username.value, this.loginForm.controls.password.value).subscribe((resp) =>{
      const user:UserDTO = resp; 
      console.log(user);
      this.router.navigate(['/home']);
      localStorage.setItem("nome", user.name);
      localStorage.setItem("cognome", user.surname);
      localStorage.setItem("email", user.email);
    }); 
    //la funzione login() permette di mandare i dati presi in input al serivzio di Login che li controlla permettendo l'accesso alla homepage.
    //servizioLogin è un oggetto dichirato nel costruttore di tipo LoginService che permette di vedere quello che sta dentro la pagina di service;
    //this.servizioLogin.login comunica con la pagina di service e ci permette di utilizzare la funzione login() che è stata creata all'interno della pagina loginService.
    //
  }

}
