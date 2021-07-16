import { PerfilService } from './perfil.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private perfilService: PerfilService) { }

  public usuario: any;

  id_usuario = Number(localStorage.getItem('id'));

  ngOnInit(): void {
    this.carregaDadosUsuario(this.id_usuario);
  }

  carregaDadosUsuario(id: number): void{
    this.perfilService.dadosUsuario(id).subscribe(data => {
      this.usuario = data;
      console.log('Dados Usuario', this.usuario);
    });
  }

}
