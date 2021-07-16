import { Usuario } from './../../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';
import { AppConstants } from 'src/app/app.constants';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NovaContaService{

  constructor(private http: HttpClient, private toastr: ToastrService, private route: Router){}

  criarConta(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(AppConstants.baseUrl, usuario).pipe(
      map(retorno => this.exibeMsg(retorno)),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any):Observable<any>{
    this.exibirMensagem('Erro!', e.error, 'toast-error');
    return EMPTY;
  }

  exibeMsg(e: any):Observable<any>{
    this.exibirMensagem('Olá ' + e.nome, 'Sua conta foi criada. Utilize o email e senha para fazer o login.', 'toast-success');
    this.route.navigate(['/']);
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

}
