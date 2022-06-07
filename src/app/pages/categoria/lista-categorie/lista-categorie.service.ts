import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaCategorieService {

  constructor(private http:HttpClient) { }

  categorie(){
    return this.http.post("http://2.44.173.210:7080/comic-be/api/category/search", {})
  }

}
