import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestMethod } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Categoria } from '../model/categoria';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
                       'Accept': 'text/plain' })
};


@Injectable()
export class CategoriaService {

  item: Categoria = new Categoria();
  private url : string = 'http://localhost:8091/servicocategoria.php';
  constructor(private http : HttpClient) { }

  listarAll() {
    return this.http.get<Categoria[]>(this.url);    
  }


}
