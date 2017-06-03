import { Component, OnInit } from '@angular/core';
/** New imports below */
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'app-the-quote',
  templateUrl: './the-quote.component.html',
  styleUrls: ['./the-quote.component.css']
})
export class TheQuoteComponent implements OnInit {
  myQuote : any = {
    id: 1,
    quote: String,
    by: String
  }
  constructor( private http: Http) {
  }

  ngOnInit() {
    this.http.get('http://quotes.rest/qod').map((res : Response)=>{
      return res.json();
    })
    .catch((err: Response|any)=>{
      return Observable.throw(err.json());
    }).subscribe((data)=>{      
      this.myQuote.quote = data.contents.quotes[0].quote; //set our myQuote Object
      this.myQuote.by = data.contents.quotes[0].author; //set our myQuote Object
    }, (err)=>{
      console.log(err);
      this.myQuote.quote = "Error in fetching data"; //set our myQuote Object
      this.myQuote.by = "Error in fetching data"; //set our myQuote Object
    });
  }

}
