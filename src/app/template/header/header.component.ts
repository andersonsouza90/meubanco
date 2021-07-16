import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public mostrarHeader: boolean = true;

  constructor(private router: Router) { }

  @Input()
  nomeCabecalho: any;

  ngOnInit(): void {
    this.nomeCabecalho = localStorage.getItem('nome');

  }

  public esconderBarra(){
    if(this.router.url == '/'){
      return true;
    }else if(this.router.url == '/login'){
      return true;
    }else if(this.router.url == '/novaConta'){
      return true;
    }else{
      return false;
    }
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }

}
