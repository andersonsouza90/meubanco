import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PixService } from './pix.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-pix',
  templateUrl: './pix.component.html',
  styleUrls: ['./pix.component.css']
})
export class PixComponent implements OnInit {
  step: number = 1;
  id_usuario = Number(localStorage.getItem('id'));
  id_destino : number = 0;

  contaSelecionada: number = 0;
  nomeSelecionado: string = '';
  _filterBy: string = '';
  listaUsuarios: Usuario [] = [];
  usuariosFiltrados: any;
  valorPix: number = 0;
  msgPix: string = '';



  constructor(private pixService: PixService, private toastr: ToastrService, private route: Router) { }

  ngOnInit(): void {
    this.carregaTodosUsuarios();
  }

  confirmarTransacao(): void{
    if(this.msgPix == ''){
      this.msgPix = 'Transferência_PIX';
    }
    this.pixService.enviarTransacao(this.id_usuario, this.id_destino, this.valorPix, this.msgPix).subscribe(data =>{
      //console.log('retorno');
      //console.log(data);
      this.route.navigate(['/home']);
    });

  }

  carregaTodosUsuarios(): void{
    this.pixService.getTodosUsuarios().subscribe(data => {
      this.listaUsuarios = data;
      this.usuariosFiltrados = this.listaUsuarios;
      //console.log('Dados Usuario', this.listaUsuarios);
    });
  }


  set filter(value: string){
    this._filterBy = value;

    this.usuariosFiltrados = this.listaUsuarios.filter((usuario: any) => usuario.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter(){
    return this._filterBy;
  }

  selecionaOrigem(conta: number, nome: string, sobrenome: string, id_destino: number){
    this.contaSelecionada = conta;
    this.nomeSelecionado = nome + ' ' +sobrenome;
    this.id_destino = id_destino;
  }

  next(){


    if(this.step == 1 && this.valorPix <= 0){
      this.exibirMensagem('Atenção!', 'Informe um valor para a transferência', 'toast-error');

    }else if(this.step == 2 && this.contaSelecionada == 0){
      this.exibirMensagem('Atenção!', 'Selecione uma conta para transferência', 'toast-error');
    }else{
      this.step = this.step + 1;
    }



  }

  previous(){
    this.step = this.step - 1;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

}
