import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crea-autore',
  templateUrl: './crea-autore.page.html',
  styleUrls: ['./crea-autore.page.scss'],
})
export class CreaAutorePage implements OnInit {
  salvaform;

  constructor(private fb:FormBuilder) {
    this.salvaform = fb.group({
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

}
