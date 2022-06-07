import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oggetto-autore',
  templateUrl: './oggetto-autore.component.html',
  styleUrls: ['./oggetto-autore.component.scss'],
})
export class OggettoAutoreComponent implements OnInit {

  @Input() nome:string;
  @Input() cognome:string;

  constructor() { }

  ngOnInit() {}

}
