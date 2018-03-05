import { Component, OnInit } from '@angular/core';
import { Mercado } from '../model/mercado';
import { MercadoService } from '../service/mercado.service';

@Component({
  selector: 'app-manter-mercado',
  templateUrl: './manter-mercado.component.html',
  styleUrls: ['./manter-mercado.component.css']
})
export class ManterMercadoComponent implements OnInit {

  public mercado: Mercado = new Mercado();
  titulo : String;
  alerts : any = []; 
  constructor(private mercadoService : MercadoService) {}
  
  ngOnInit() {
    this.titulo = 'Cadastrar';
    if(this.mercadoService.getMercado() !== undefined){
      this.mercado = this.mercadoService.getMercado();
      this.mercadoService.setMercado(undefined);
    }
  }

  limparCampos(){
    this.mercado = new Mercado();
  }

  save(m){
    this.alerts = []; 
    if(m.id === undefined || m.id === null){
      this.incluir(m);
    }else{
      this.atualizar(m);
    }
  }

  incluir(m){
    this.mercadoService.incluir(m).subscribe(
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

  atualizar(m){
    this.mercadoService.atualizar(m).subscribe(
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


}
