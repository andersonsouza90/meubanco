
import { HomeService } from './home.service';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) { }

  public usuario: any;
  public nomeUsuario: String = '';

  id_usuario = Number(localStorage.getItem('id'));

  ngOnInit(): void {

    this.carregaDadosUsuario(this.id_usuario);

  }

  carregaDadosUsuario(id: number): void{
    this.homeService.dadosUsuario(id).subscribe(data => {
      this.usuario = data;
      this.nomeUsuario = data.nome;
      console.log('Dados Usuario', this.usuario);
    });
  }


}
