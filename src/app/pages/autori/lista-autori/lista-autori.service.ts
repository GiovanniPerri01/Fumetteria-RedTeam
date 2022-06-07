import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaAutoriService {

  constructor(private http:HttpClient) { }

  autori(){
    return this.http.post("http://2.44.173.210:7080/comic-be/api/author/search", {})
  }

}
