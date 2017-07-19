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

  //new function
  getFavQuotes() {
    return [{
      id: 2,
      quote: "Truth is a virus, courage is contagious",
      by: "unknown"
    },{
      id:3,
      quote:"Do not go gentle into that good night, Old age should burn and rave at close of day; Rage, rage against the dying of the light",
      by: "Dylan Thomas"
    },{
      id:4,
      quote:"It is well enough that people of the nation do not understand our banking and monetary system, for if they did, I believe there would be a revolution before tomorrow morning.",
      by: "Henry Ford"
    }];
  }
}
