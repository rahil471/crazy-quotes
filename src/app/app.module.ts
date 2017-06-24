import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TheQuoteComponent } from './the-quote/the-quote.component';

//services
import { TheQuoteService } from './the-quote/the-quote.service';

@NgModule({
  declarations: [
    AppComponent,
    TheQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TheQuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
