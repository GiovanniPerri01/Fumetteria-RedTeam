import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreaCategoriaDto } from 'src/app/model/package/dto/crea-categoria-dto';
import { CreaCategoriaService } from './crea-categoria.service';

@Component({
  selector: 'app-crea-categoria',
  templateUrl: './crea-categoria.page.html',
  styleUrls: ['./crea-categoria.page.scss'],
})
export class CreaCategoriaPage implements OnInit {
  categoriaForm;
  name: string;
  description: string;

  constructor(private fb: FormBuilder, private cc: CreaCategoriaService) {
    this.categoriaForm = fb.group({
      nome: ['', [Validators.required]],
      descrizione: ['', [Validators.required]],
    });
  }

  creaCategoria() {
    this.cc.creaCategoria(this.name, this.description).subscribe((resp) => {
      const categoria: CreaCategoriaDto = resp;
      console.log(categoria);
    });
  }

  ngOnInit() {}
}
