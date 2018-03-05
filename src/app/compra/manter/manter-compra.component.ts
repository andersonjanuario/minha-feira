import { Component, OnInit } from '@angular/core';
import { Item } from '../../item/model/item';
import { Compra } from '../model/compra';
import { ItemService } from '../../item/service/item.service';
import { Mercado } from '../../mercado/model/mercado';
import { MercadoService } from '../../mercado/service/mercado.service';

@Component({
  selector: 'app-manter-compra',
  templateUrl: './manter-compra.component.html',
  styleUrls: ['./manter-compra.component.css']
})
export class ManterCompraComponent implements OnInit {

  public compra: Compra = new Compra();
  //public mercado: Mercado = new Mercado();
  
  public mercados : Mercado[];
  public itens : Item[];
  public titulo : String;
  public alerts : any = []; 
  
  
  
  constructor(private itemService : ItemService, 
    private mercadoService : MercadoService) {}
  
  ngOnInit() {
    this.titulo = 'Cadastrar';
    /*if(this.itemService.getItem() !== undefined){
      this.item = this.itemService.getItem();
      this.itemService.setItem(undefined);
      this.titulo = 'Alterar';
    }*/
    this.loadMercados();
    this.loadItens()
  }

  limparCampos(){
    this.compra = new Compra();
  }

  save(i){
    this.alerts = [];     
    this.incluir(i);   
  }

  incluir(i){
    this.itemService.incluir(i).subscribe(
      data => {
        this.addAlert('alert-success','Cadastrado com sucesso');
        this.limparCampos();
      },
        response => {
          if(response.status === 200 || response.status === 201){
            this.addAlert('alert-success', 'Sucesso!');
            this.limparCampos();
          }else if(response.status === 404){
            this.addAlert('alert-danger', 'Serviço indisponível!');
          }else {
            this.addAlert('alert-danger', 'Erro desconhecido!');
          }
      });
  } 

  addAlert(type, message) {
    this.alerts.push({
        "type": type,
        "msg": message
    });
  }

  closeAlert(index) {
    this.alerts.splice(index, 1);
  }

  loadItens() {
    this.itemService.listarAll().subscribe(
      resp  => {
        this.itens = resp;                  
    },
      error => {
        console.log(error);
    });
  } 

  loadMercados() {
    this.mercadoService.listarAll().subscribe(
      resp  => {
        this.mercados = resp;                  
    },
      error => {
        console.log(error);
    });
  } 
}
