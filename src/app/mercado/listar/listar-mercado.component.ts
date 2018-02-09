import { Component, OnInit } from '@angular/core';
import { MercadoService } from '../service/mercado.service';

@Component({
  selector: 'app-listar-mercado',
  templateUrl: './listar-mercado.component.html',
  styleUrls: ['./listar-mercado.component.css']
})
export class ListarMercadoComponent implements OnInit {

  constructor(private mercadoService : MercadoService) {}
  mercados = [];
  teste = undefined;

  ngOnInit() {
    this.mercados = this.mercadoService.listarMercados();
    this.mercadoService.teste().subscribe(heroes => this.teste = heroes);
    console.log('teste');
  }

}
