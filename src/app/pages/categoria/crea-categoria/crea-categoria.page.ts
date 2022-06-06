import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-crea-categoria',
  templateUrl: './crea-categoria.page.html',
  styleUrls: ['./crea-categoria.page.scss'],
})
export class CreaCategoriaPage implements OnInit {
  categoriaForm;

  constructor(private fb:FormBuilder) {
    this.categoriaForm = fb.group({ 
      nome : ['', [Validators.required]],
      descrizione : ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

}
