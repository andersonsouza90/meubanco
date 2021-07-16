import { AppConstants } from './../../app.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  constructor(private http: HttpClient){}

  login(usuario:any){
    return this.http.post(AppConstants.baseLogin, usuario);

  }

}
