import { PerfilEditarComponent } from './componentes/perfil/perfil-editar.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './publico/login/login.component';
import { FormsModule } from '@angular/forms';

import { HttpInterceptorModule } from './app.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ExtratoComponent } from './componentes/extrato/extrato.component';
import { PixComponent } from './componentes/pix/pix.component';
import { DepositoComponent } from './componentes/deposito/deposito.component';
import { PagarBoletoComponent } from './componentes/pagar-boleto/pagar-boleto.component';
import { NovaContaComponent } from './publico/nova-conta/nova-conta.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    PerfilComponent,
    PerfilEditarComponent,
    ExtratoComponent,
    PixComponent,
    DepositoComponent,
    PagarBoletoComponent,
    NovaContaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpInterceptorModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
