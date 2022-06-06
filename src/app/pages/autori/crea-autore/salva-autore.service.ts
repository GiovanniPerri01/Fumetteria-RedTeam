import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SalvaAutore } from 'src/app/model/package/commands/salva-autore';

@Injectable({
  providedIn: 'root'
})
export class SalvaAutoreService {

  constructor(private http:HttpClient) {}

  salvaAutore (nome: string, cognome :string) {
    const autore = new SalvaAutore ();
    autore.name = nome;
    autore.surname = cognome;

    return this.http.post<any>('http://2.44.173.210:7080/comic-be/api/author/create', autore);

  }

}
