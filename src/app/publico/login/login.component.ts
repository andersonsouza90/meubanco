import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public nomeApp: string = 'I-Bank';

  usuario = {email: '', senha: ''};

  constructor(private loginService: LoginService, private router: Router, private toastr: ToastrService ) { }

  public login(){

    this.loginService.login(this.usuario).subscribe(data => {

      localStorage.setItem("token", JSON.parse(JSON.stringify(data)).id);
      localStorage.setItem("id", JSON.parse(JSON.stringify(data)).id);
      localStorage.setItem("nome", JSON.parse(JSON.stringify(data)).nome);
      localStorage.setItem("login", '1');

      if(JSON.parse(JSON.stringify(data)).id == null){
        this.exibirMensagem('Atenção!', 'Login e senha inválidos!', 'toast-error');
        this.router.navigate(['login']);

      }else{
        window.location.href = '/home';
        //this.router.navigate(['home']);

      }

    },
      error =>{
        console.error("Erro ao fazer login");
        this.exibirMensagem('Erro', 'Erro ao fazer login!', 'toast-error');
      }
    );;

  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string):void{
    this.toastr.show(mensagem, titulo, {closeButton: true, progressBar: true}, tipo);
  }

  ngOnInit(): void {}

}
