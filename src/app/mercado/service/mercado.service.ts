import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { RequestMethod } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Mercado } from '../model/mercado';

const httpOptions = {
headers: new HttpHeaders({ 'Content-Type': 'application/json',
                           'Accept': 'text/plain' })
};

@Injectable()
export class MercadoService {

  mercado: Mercado = new Mercado();
  constructor(private http : HttpClient) { }

  setMercado(m){
    this.mercado = m;
  }

  getMercado(){
    return this.mercado;
  }


  listarMercados(filter) {
    return this.http.get<Mercado[]>
    ('http://localhost:8091/servicomercado.php?page='+filter.page+'&size='+filter.size,  { observe: 'response' });    
  }

  incluir(mercado: Mercado): Observable<Mercado> {
    return this.http.post<Mercado>('http://localhost:8091/servicomercado.php?op=add', mercado, httpOptions)
    /*.pipe(
        //tap((mercado: Mercado) => this.log(`added hero w/ id=${mercado.id}`)),
        catchError(this.handleError<Mercado>('save'))
    )*/;
  }

  atualizar(mercado: Mercado): Observable<Mercado> {
    return this.http.put<Mercado>('http://localhost:8091/servicomercado.php?op=alt', mercado, httpOptions);
  }  

  delete(mercado: Mercado): Observable<Mercado> {
    //const id = typeof mercado === 'number' ? mercado : mercado.id;
    //const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Mercado>('http://localhost:8091/servicomercado.php?op=del&id='+mercado.id, httpOptions);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    //this.messageService.add('HeroService: ' + message);
  }  
   
}
