import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  selected : any = [];

  ngOnInit() {
    this.selected = ["selected", ""];
  }

  checarSelected(indice){
    for(var i=0; i < this.selected.length; i++){
      this.selected[i] = "";        
    }
    this.selected[indice] = "selected";        
  }

}
