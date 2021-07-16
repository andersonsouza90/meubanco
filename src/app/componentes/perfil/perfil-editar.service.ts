import { AppConstants } from './../../app.constants';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Usuario } from 'src/app/model/Usuario';
import { catchError, map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PerfilEditarService{

  constructor(private http: HttpClient, private toastr: ToastrService){}

  dadosUsuario(id: Number): Observable<Usuario>{
    return this.http.get<Usuario>(AppConstants.baseUrl + id);
  }



  alterarPerfil(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(AppConstants.baseUrl, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any):Observable<any>{
    this.exibirMensagem('Erro!', 'Não foi possível realizar a operação.', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

}
