import { Component, OnInit } from '@angular/core';
import { AutoreDTO } from 'src/app/model/package/dto/autore-dto';
import { ListaAutoriDto } from 'src/app/model/package/dto/lista-autori-dto';
import { ListaAutoriService } from './lista-autori.service';

@Component({
  selector: 'app-lista-autori',
  templateUrl: './lista-autori.page.html',
  styleUrls: ['./lista-autori.page.scss'],
})
export class ListaAutoriPage implements OnInit {

  lista:AutoreDTO[];

  constructor(private serviceLista:ListaAutoriService) { }

  ngOnInit() {
    this.serviceLista.autori().subscribe(resp=>{
      const lista:ListaAutoriDto = resp;
      this.lista = lista.list;
    })
  }

}