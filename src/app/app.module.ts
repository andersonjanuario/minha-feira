import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ManterMercadoComponent } from './mercado/manter/manter-mercado.component';
import { ListarMercadoComponent } from './mercado/listar/listar-mercado.component';
import { MercadoService } from './mercado/service/mercado.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListarItemComponent } from './item/listar/listar-item.component';
import { ManterItemComponent } from './item/manter/manter-item.component';
import { ItemService } from './item/service/item.service';
import { CategoriaService } from './categoria/service/categoria.service';
import { ManterCompraComponent } from './compra/manter/manter-compra.component';
import { ListarCompraComponent } from './compra/listar/listar-compra.component';
import { CompraService } from './compra/service/compra.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'manter-mercado', component: ManterMercadoComponent },
  { path: 'listar-mercado', component: ListarMercadoComponent },
  { path: 'listar-item', component: ListarItemComponent },
  { path: 'manter-item', component: ManterItemComponent },
  { path: 'listar-compra', component: ListarCompraComponent },
  { path: 'manter-compra', component: ManterCompraComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ManterMercadoComponent,
    ListarMercadoComponent,
    ListarItemComponent,
    ManterItemComponent,
    ManterCompraComponent,
    ListarCompraComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HttpModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [MercadoService, ItemService, CategoriaService, CompraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
