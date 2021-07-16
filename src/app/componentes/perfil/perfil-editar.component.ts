
import { Router } from '@angular/router';
import { CepService } from './../../services/cep.service';
import { PerfilEditarService } from './perfil-editar.service';
import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilEditarComponent implements OnInit{

  constructor(private perfilEditarService: PerfilEditarService,
              private cepService: CepService,
              private route: Router, private toastr: ToastrService) { }

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
    uf: ''
  };

  _cep: any;

  id_usuario = Number(localStorage.getItem('id'));

  ngOnInit(): void {
    this.carregaDadosUsuario(this.id_usuario);
  }

  carregaDadosUsuario(id: number): void{
    this.perfilEditarService.dadosUsuario(id).subscribe(data => {
      this.usuario = data;
      console.log('Dados Usuario', this.usuario);
    });
  }

  buscaCep(): void{
    this.cepService.consultaCEP(this.usuario.cep).subscribe(retorno =>{
      console.log(retorno);
      this._cep = retorno;

      this.usuario.cep = this._cep.cep;
      this.usuario.bairro = this._cep.bairro;
      this.usuario.endereco = this._cep.logradouro;
      this.usuario.complemento = this._cep.complemento;
      this.usuario.uf = this._cep.uf;
      this.usuario.cidade = this._cep.localidade;
    });
  }

  salvarPerfil(){
    this.perfilEditarService.alterarPerfil(this.usuario).subscribe(retorno =>{
      this.usuario = retorno;

      console.log('teste', retorno);

      localStorage.setItem("nome", JSON.parse(JSON.stringify(retorno)).nome);

      this.exibirMensagem(
        'SISTEMA',
        'Seus dados foram atualizados com sucesso.',
        'toast-success'
      );

      //this.route.navigate(['/perfil/{a}']);
      window.location.href = '/perfil';

    });
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

}
