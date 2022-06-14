import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaCategorieDto } from 'src/app/model/package/dto/lista-categorie-dto';

@Injectable({
  providedIn: 'root'
})
export class ListaCategorieService {

  constructor(private http:HttpClient) { }

  categorie(){
    return this.http.post<ListaCategorieDto>("http://2.44.173.210:7080/comic-be/api/category/search", {})//vado a fare una chiamata al back-end e gli
                                                                                      //passo un corpo JSON vuoto
  }

}
