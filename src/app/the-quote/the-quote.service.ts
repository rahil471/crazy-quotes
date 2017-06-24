import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class TheQuoteService {

  constructor(private http: Http) { }

  getQuote(): Observable <any>{
    return this.http.get('http://quotes.rest/qod').map(response => response.json().contents)
    .catch((err: Response|any)=>{
      return Observable.throw(err.statusText);
    });
  }
}
