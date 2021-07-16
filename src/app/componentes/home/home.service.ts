import { Usuario } from './../../model/Usuario';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from './../../app.constants';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  // esse construtor fazer injeção de dependencia
  constructor(private http: HttpClient){};

  dadosUsuario(id: Number): Observable<Usuario>{
    return this.http.get<Usuario>(AppConstants.baseUrl + id);

  }


}
