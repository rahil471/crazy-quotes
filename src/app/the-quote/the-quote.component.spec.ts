import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheQuoteComponent } from './the-quote.component';

describe('TheQuoteComponent', () => {
  let component: TheQuoteComponent;
  let fixture: ComponentFixture<TheQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
