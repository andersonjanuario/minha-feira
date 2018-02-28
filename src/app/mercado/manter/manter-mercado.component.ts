import { Component, OnInit } from '@angular/core';
import { Mercado } from '../model/mercado';
import { MercadoService } from '../service/mercado.service';

@Component({
  selector: 'app-manter-mercado',
  templateUrl: './manter-mercado.component.html',
  styleUrls: ['./manter-mercado.component.css']
})
export class ManterMercadoComponent implements OnInit {

  mercado: Mercado = new Mercado();
  titulo : String;
  alerts : any = []; 
  constructor(private mercadoService : MercadoService) {}
  
  ngOnInit() {
    this.titulo = 'Cadastrar';
    //this.mercado.nome = 'Teste';
  }

  limparCampos(){
    this.mercado = new Mercado();
  }

  save(m){
    this.mercadoService.save(m).subscribe(data => {},
      response => {
        if(response.status === 200){
          this.addAlert('alert-success', 'Sucesso!');
          this.limparCampos();
        }else if(response.status === 404){
          this.addAlert('alert-danger', 'Serviço indisponível!');
        }else {
          this.addAlert('alert-danger', response.error.message);
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
