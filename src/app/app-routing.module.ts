import { NovaContaComponent } from './publico/nova-conta/nova-conta.component';
import { PagarBoletoComponent } from './componentes/pagar-boleto/pagar-boleto.component';
import { DepositoComponent } from './componentes/deposito/deposito.component';
import { PixComponent } from './componentes/pix/pix.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './publico/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilEditarComponent } from './componentes/perfil/perfil-editar.component';
import { ExtratoComponent } from './componentes/extrato/extrato.component';

const routes: Routes = [
  {path: '', component: LoginComponent},

  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'perfil/editar', component: PerfilEditarComponent},
  {path: 'extrato', component: ExtratoComponent},
  {path: 'pix', component: PixComponent},
  {path: 'depositar', component: DepositoComponent},
  {path: 'pagarBoleto', component: PagarBoletoComponent},
  {path: 'novaConta', component: NovaContaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
