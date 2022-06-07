import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-oggetto-categoria',
  templateUrl: './oggetto-categoria.component.html',
  styleUrls: ['./oggetto-categoria.component.scss'],
})
export class OggettoCategoriaComponent implements OnInit {
  @Input() nome:string;
  @Input() descrizione:string;

  constructor() { }

  ngOnInit() {}

}
