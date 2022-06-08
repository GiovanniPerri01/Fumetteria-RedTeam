import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCommand } from 'src/app/model/package/commands/login-command';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { } //http è un oggetto di tipo HttpClient che permette le chiamate al BE

  login(username:string, password:string){ //questa funzione preleva i dati username e password dal typescript 
                                           //passandoli nel LoginModel e inviandoli tramite questo al BE

    const loginModel = new LoginCommand(); //creo un oggetto loginModel di tipo LoginCommand per mandare al BE i dati username e password

    loginModel.email = username; //mette il valore di username nel campo username dell'oggetto loginModel 
    loginModel.password = password; //mette il valore di password nel campo username dell'oggetto loginModel

    return this.http.post<any>('http://2.44.173.210:7080/comic-be/api/login/login', loginModel);
  } //permette una chiamata di tipo post all'indirizzo del BE passandogli i dati del loginModel (username, password)

}
