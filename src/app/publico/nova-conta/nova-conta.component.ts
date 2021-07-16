import { catchError, map } from 'rxjs/operators';
import { NovaContaService } from './nova-conta.service';
import { Usuario } from './../../model/Usuario';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { of, throwError } from 'rxjs';

@Component({
  selector: 'app-nova-conta',
  templateUrl: './nova-conta.component.html',
  styleUrls: ['./nova-conta.component.css']
})
export class NovaContaComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    sobrenome: '',
    email: '',
    token: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    senha: ''
  };

  conf_senha: string = '';

  _cep: any;

  constructor(private cepService: CepService, private novaContaService: NovaContaService) { }

  ngOnInit(): void {
  }

  salvarConta(){
    this.novaContaService.criarConta(this.usuario).subscribe(retorno =>retorno);
  }

  exibeRetorno(e: any):any{
    console.log('retorno: ', e);
  }

  buscaCep(): void{
    this.cepService.consultaCEP(this.usuario.cep).subscribe(retorno =>{
      //console.log('retorno cep', retorno);

      this._cep = retorno;

      this.usuario.cep = this._cep.cep;
      this.usuario.bairro = this._cep.bairro;
      this.usuario.endereco = this._cep.logradouro;
      this.usuario.complemento = this._cep.complemento;
      this.usuario.uf = this._cep.uf;
      this.usuario.cidade = this._cep.localidade;

    });
  }

}
