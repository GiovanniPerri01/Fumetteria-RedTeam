import { Component, Input, OnInit } from '@angular/core';
import { AutoreDTO } from 'src/app/model/package/dto/autore-dto';

@Component({
  selector: 'app-card-fumetti',
  templateUrl: './card-fumetti.component.html',
  styleUrls: ['./card-fumetti.component.scss'],
})
export class CardFumettiComponent implements OnInit {
  @Input() name:string;
  @Input() author:string;

  exports: [CardFumettiComponent]

  constructor() { }

  ngOnInit() {}

}
