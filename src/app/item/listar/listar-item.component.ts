import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-item',
  templateUrl: './listar-item.component.html',
  styleUrls: ['./listar-item.component.css']
})
export class ListarItemComponent implements OnInit {

  constructor(private itemService : ItemService,
              private router: Router) {}

    itens: any = []; 
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
      this.itemService.listar({
        page: this.page - 1,
        size: this.itemsPerPage
      }).subscribe(
        resp  => {
          this.itens = resp.body["item"];          
          this.totalItems = parseInt(resp.body["total"]);          
      },
        error => {
          console.log(error);
      });
    } 
    

  ngOnInit() {
    this.loadData();    
  }

  excluir(m){
    this.itemService.delete(m).subscribe(
      resp  => {
        this.loadData();
    },
      error => {
        console.log(error);
    });;
  }

  carregarTelaAlterar(m){
    this.itemService.setItem(m);
    this.router.navigate(['/manter-item']);
  }

}
