import { Component, LOCALE_ID, OnInit } from '@angular/core';
import { UserDTO } from 'src/app/model/package/dto/user-dto';

@Component({
  selector: 'app-toolbar-superiore',
  templateUrl: './toolbar-superiore.component.html',
  styleUrls: ['./toolbar-superiore.component.scss'],
})
export class ToolbarSuperioreComponent implements OnInit {
  nome:string;
  cognome:string;
  email:string;

  constructor() { 
    this.nome = localStorage.getItem("nome");
    this.cognome = localStorage.getItem("cognome");
    this.email = localStorage.getItem("email");
  }

  ngOnInit() {}

}
