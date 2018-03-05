import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../service/item.service';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { Categoria } from '../../categoria/model/categoria';

@Component({
  selector: 'app-manter-item',
  templateUrl: './manter-item.component.html',
  styleUrls: ['./manter-item.component.css']
})
export class ManterItemComponent implements OnInit {

  public item: Item = new Item();
  titulo : String;
  alerts : any = []; 
  public categorias: Categoria[];
  constructor(private itemService : ItemService, 
    private categoriaService : CategoriaService) {}
  
  ngOnInit() {
    this.titulo = 'Cadastrar';
    if(this.itemService.getItem() !== undefined){
      this.item = this.itemService.getItem();
      this.itemService.setItem(undefined);
      this.titulo = 'Alterar';
    }
    this.loadCategorias();
  }

  limparCampos(){
    this.item = new Item();
  }

  save(i){
    this.alerts = []; 
    if(i.id === undefined || i.id === null){
      this.incluir(i);
    }else{
      this.atualizar(i);
    }
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

  atualizar(i){
    this.itemService.atualizar(i).subscribe(
      data => {
        this.addAlert('alert-success','Atualizado com sucesso');        
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


  loadCategorias() {
    this.categoriaService.listarAll().subscribe(
      resp  => {
        this.categorias = resp;                  
    },
      error => {
        console.log(error);
    });
  } 

}
