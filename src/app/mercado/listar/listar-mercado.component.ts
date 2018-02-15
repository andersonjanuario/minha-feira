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
  teste = undefined;

  ngOnInit() {
    this.mercadoService.listarMercados().subscribe(data => {
      console.log(data);
      this.mercados = data;
    });
    //this.mercadoService.teste().subscribe(data => {
    //  console.log(data);
    //  this.mercados = data;
    //});
  }

}
