import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
})
export class Convert {
  fromValue: any = '1';
  toValue: any;
  fromCurr: any = 'USD';
  toCurr: any = 'UAH';
  resultRate: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCurrencyRateOne();
  }

  async getCurrencyRateOne() {
    this.http.get(`https://free.currencyconverterapi.com/api/v5/convert?q=${this.fromCurr}_${this.toCurr}&compact=y&apiKey=83c8b3ef61f64ee9a07ed25fc8de3a54`)
    .subscribe((response) => {
      this.resultRate = Object.values(response)[0].val;
        this.calculateCurrencyOne();
    });
  }

  async getCurrencyRateTwo() {
    this.http.get(`https://free.currencyconverterapi.com/api/v5/convert?q=${this.fromCurr}_${this.toCurr}&compact=y&apiKey=83c8b3ef61f64ee9a07ed25fc8de3a54`)
    .subscribe((response) => {
      this.resultRate = Object.values(response)[0].val;
        this.calculateCurrencyTwo();
    });
  }

  calculateCurrencyOne() {
    if(this.fromValue){
      this.toValue = (this.fromValue * parseFloat(this.resultRate)).toFixed(1);
    }
  }

  calculateCurrencyTwo() {
    this.fromValue = (this.toValue / parseFloat(this.resultRate)).toFixed(1);
  }
}
