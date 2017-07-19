import { Component, OnInit } from '@angular/core';
/** New imports below */

import { TheQuoteService } from './the-quote.service'; // import our service


@Component({
  selector: 'app-the-quote',
  templateUrl: './the-quote.component.html',
  styleUrls: ['./the-quote.component.css']
})
export class TheQuoteComponent implements OnInit {
  myQuote :myQuote = {
    quote: "",
    by: ""
  };
  favourites: Array<myQuote>;
  constructor( private thequoteservice: TheQuoteService) { //initialize
  }

  ngOnInit() {
    this.thequoteservice.getQuote().subscribe((data)=>{ //use methods in our service
      this.myQuote ={
        quote: data.quotes[0].quote,
        by: data.quotes[0].author
      }
    }, (err)=>{
      this.myQuote ={
        quote: err,
        by: err
      }
    });

    this.favourites = this.thequoteservice.getFavQuotes(); //get favoutite quotes
  }

  showAuthor = function(author){
    alert(author);
  }

}

//creating myQuote interface
interface myQuote {
  id?: number,
  quote: String,
  by: String
}
