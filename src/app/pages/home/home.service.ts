import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  fumetti(){
    return this.http.post("http://2.44.173.210:7080/comic-be/api/comic/search", {})
  }
}
