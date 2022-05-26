import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class Header implements OnInit {
  response: any;
  rateUSD: any;
  rateEUR: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    myHeaders = myHeaders.append('apikey', '4M6sDiW85PqACCZstVZ1gS5Wug7Zg4qu');
    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };

    this.http
      .get('https://api.apilayer.com/fixer/latest?symbols=UAH&base=USD', requestOptions)
      .subscribe((response) => {
        this.rateUSD = response;
      });

    this.http
      .get('https://api.apilayer.com/fixer/latest?symbols=UAH&base=EUR', requestOptions)
      .subscribe((response) => {
        this.rateEUR = response;
      });
  }

}
