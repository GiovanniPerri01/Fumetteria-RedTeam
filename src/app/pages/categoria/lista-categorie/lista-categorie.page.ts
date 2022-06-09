import { Component, OnInit } from '@angular/core';
import { CategorieDto } from 'src/app/model/package/dto/categorie-dto';
import { ListaCategorieDto } from 'src/app/model/package/dto/lista-categorie-dto';
import { ListaCategorieService } from './lista-categorie.service';

@Component({
  selector: 'app-lista-categorie',
  templateUrl: './lista-categorie.page.html',
  styleUrls: ['./lista-categorie.page.scss'],
})

export class ListaCategoriePage implements OnInit {
  
  lista:CategorieDto[];

  constructor(private serviceLista:ListaCategorieService) {}

  ngOnInit() {
    this.serviceLista.categorie().subscribe(resp=>{
      const jsonCompleto:ListaCategorieDto = resp;//inserisco la resp(che equivale al json completo ricevuto dal back-end) in jsonCompleto
      this.lista = jsonCompleto.list;//con il comando ".list" vado a prendermi il campo "list" del file jsonCompleto
  })


}}
