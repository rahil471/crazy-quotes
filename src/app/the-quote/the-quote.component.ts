import { Component, OnInit } from '@angular/core';
/** New imports below */

import { TheQuoteService } from './the-quote.service'; // import our service


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
  constructor( private thequoteservice: TheQuoteService) { //initialize
  }

  ngOnInit() {
    this.thequoteservice.getQuote().subscribe((data)=>{ //use methods in our service
      this.myQuote.quote = data.quotes[0].quote;
      this.myQuote.by = data.quotes[0].author;
    }, (err)=>{
      this.myQuote.quote = err;
      this.myQuote.by = err;
    });
  }

}
