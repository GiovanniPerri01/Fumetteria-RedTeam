import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SalvaAutore } from 'src/app/model/package/commands/salva-autore';
import { AutoreDTO } from 'src/app/model/package/dto/autore-dto';
import { SalvaAutoreService } from './salva-autore.service';

@Component({
  selector: 'app-crea-autore',
  templateUrl: './crea-autore.page.html',
  styleUrls: ['./crea-autore.page.scss'],
})
export class CreaAutorePage implements OnInit {
  salvaform;
   

  constructor(private fb:FormBuilder , private sca: SalvaAutoreService) {
    this.salvaform = fb.group({
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]]
    })
   }

  ngOnInit() {
  }

  salvaAutore (){

    this.sca.salvaAutore(this.salvaform.controls.nome.value , this.salvaform.controls.cognome.value).subscribe(resp =>{
      const autore:AutoreDTO = resp;
      console.log (autore);
    } ) ;
    

  }
}
