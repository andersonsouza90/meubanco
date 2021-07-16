import { ExtratoConta } from './../../model/ExtratoConta';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { AppConstants } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ExtratoService{

  constructor(private http: HttpClient){}

  getExtratos(id: number): Observable<ExtratoConta[]>{ //Observable empacota o response, é assincrono
    return this.http.get<ExtratoConta[]>(AppConstants.baseUrlExtrato + id);
  }

}
