import { ExtratoConta } from './../../model/ExtratoConta';
import { ExtratoService } from './extrato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  id_usuario = Number(localStorage.getItem('id'));
  listaExtratos: ExtratoConta [] = [];

  constructor(private extratoService: ExtratoService) { }

  ngOnInit(): void {
    this.carregaExtratos(this.id_usuario);

  }

  carregaExtratos(id: number): void{
    this.extratoService.getExtratos(id).subscribe({
      next: e => {
        this.listaExtratos = e;
        console.log(this.listaExtratos);
      },
      error: err => console.log('Erro: ' + err)
    });
  }



}
