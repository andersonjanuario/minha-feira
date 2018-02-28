import { Component, OnInit } from '@angular/core';
import { MercadoService } from '../service/mercado.service';

@Component({
  selector: 'app-listar-mercado',
  templateUrl: './listar-mercado.component.html',
  styleUrls: ['./listar-mercado.component.css']
})
export class ListarMercadoComponent implements OnInit {

  constructor(private mercadoService : MercadoService) {}
  mercados: any = []; 

  ngOnInit() {
    this.mercadoService.listarMercados().subscribe(
      data => {
        this.mercados = data;
    },
      error => {
        console.log(error);
    });
  }

}
