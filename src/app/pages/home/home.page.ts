import { Component } from '@angular/core';
import { CategorieDto } from 'src/app/model/package/dto/categorie-dto';
import { FumettoDto } from 'src/app/model/package/dto/fumetto-dto';
import { ListaFumetti } from 'src/app/model/package/dto/lista-fumetti';
import { ListaFumettiPage } from '../fumetti/lista-fumetti/lista-fumetti.page';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista:FumettoDto[];
  

  constructor(private serviceCard:HomeService) {}

  ngOnInit() {
    this.serviceCard.fumetti().subscribe(resp=>{
      const lista:ListaFumetti = resp;
      this.lista = lista.list;
  })

}

}
