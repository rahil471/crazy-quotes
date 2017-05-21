import { Component, OnInit } from '@angular/core';

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
  constructor() {
  }

  ngOnInit() {
    this.myQuote.quote = "Life is about making an impact, not making an income.";
    this.myQuote.by = "Kevin Kruse";
  }

}
