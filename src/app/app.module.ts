import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ManterMercadoComponent } from './mercado/manter/manter-mercado.component';
import { ListarMercadoComponent } from './mercado/listar/listar-mercado.component';
import { MercadoService } from './mercado/service/mercado.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'manter-mercado', component: ManterMercadoComponent },
  { path: 'listar-mercado', component: ListarMercadoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ManterMercadoComponent,
    ListarMercadoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    HttpClientModule
  ],
  providers: [MercadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
