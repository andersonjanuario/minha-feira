import { Component, OnInit } from '@angular/core';
import { MercadoService } from '../service/mercado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-mercado',
  templateUrl: './listar-mercado.component.html',
  styleUrls: ['./listar-mercado.component.css']
})

export class ListarMercadoComponent implements OnInit {


  //[collectionSize]="totalItems" [(page)]="page" [pageSize]="itemsPerPage" [maxSize]="7" [rotate]="true" (pageChange)="loadPage($event)"



  constructor(private mercadoService : MercadoService,
    private router: Router) {}
    mercados: any = []; 

    //Paginação
    itemsPerPage: number = 5;
    totalItems: number = 0;
    page: number = 1;
    previousPage: any;
  
    loadPage(page: number) {
      if (page !== this.previousPage) {
        this.previousPage = page;
        this.loadData();
      }
    }
    
    loadData() {
      this.mercadoService.listarMercados({
        page: this.page - 1,
        size: this.itemsPerPage
      }).subscribe(
        resp  => {
          this.mercados = resp ;
          //var x = //resp.headers;
          this.totalItems = 27;
      },
        error => {
          console.log(error);
      });
    }  
    //Paginacao

  ngOnInit() {
    this.loadData();
    /*this.mercadoService.listarMercados(page: (this.page - 1), size: this.itemsPerPage).subscribe(
      data => {
        this.mercados = data;
    },
      error => {
        console.log(error);
    });*/
  }

  carregarTelaAlterar(m){
    this.mercadoService.setMercado(m);
    this.router.navigate(['/manter-mercado']);
  }

}
