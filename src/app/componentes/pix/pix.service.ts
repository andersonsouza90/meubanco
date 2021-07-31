import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/model/Usuario';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { AppConstants } from 'src/app/app.constants';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PixService{

  constructor(private http: HttpClient, private toastr: ToastrService){};

  getTodosUsuarios(): Observable<Usuario[]>{

    return this.http.get<Usuario[]>(AppConstants.baseUrl);

  }

  // enviarTransacao(id_origem: number, id_destino: number, valor: number, msgPix: String): Observable<any>{
  //   return this.http.get<String>(AppConstants.baseUrlPix + id_origem+'/'+id_destino+'/'+valor+'/'+msgPix,
  //   {responseType: 'text' as 'json'}).pipe(
  //     map(retorno => this.exibirRetorno(retorno)),
  //     catchError(erro => this.exibeErro(erro))
  //   );
  // }

  enviarTransacao(id_origem: number, id_destino: number, valor: number, msgPix: String): Observable<any>{
    return this.http.post<String>(AppConstants.baseUrlPix + id_origem+'/'+id_destino+'/'+valor+'/'+msgPix, null,
    {responseType: 'text' as 'json'}).pipe(
      map(retorno => this.exibirRetorno(retorno)),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(e: any):Observable<any>{
    console.log(e);
    this.exibirMensagem('Erro!', e.error, 'toast-error');
    return EMPTY;
  }

  exibirRetorno(e: any):Observable<any>{
    //console.log(e);
    this.exibirMensagem('', e, 'toast-success');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

}
