import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestMethod } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Item } from '../model/item';

const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json',
                           'Accept': 'text/plain' })
};


@Injectable()
export class ItemService {

  item: Item = new Item();
  private url : string = "http://localhost:8091/servicoitem.php";
  constructor(private http : HttpClient) { }

  setItem(i){
    this.item = i;
  }

  getItem(){
    return this.item;
  }

  listar(filter) {
    return this.http.get<Item[]>
    (this.url+'?page='+filter.page+'&size='+filter.size,  { observe: 'response' });    
  }

  listarAll() {
    return this.http.get<Item[]>(this.url+'?op=all');    
  }

  incluir(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url+'?op=add', item, httpOptions);
  }

  atualizar(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url+'?op=alt', item, httpOptions);
  }  

  delete(item: Item): Observable<Item> {
    const url = this.url+'?op=del&id='+item.id;
    return this.http.delete<Item>(url, httpOptions);
  }



}
