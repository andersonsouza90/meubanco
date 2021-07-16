import { AppConstants } from './../../app.constants';
import { Usuario } from './../../model/Usuario';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class PerfilService{

  // esse construtor fazer injeção de dependencia
  constructor(private http: HttpClient){};

  dadosUsuario(id: Number): Observable<Usuario>{

    return this.http.get<Usuario>(AppConstants.baseUrl + id);

  }



}
