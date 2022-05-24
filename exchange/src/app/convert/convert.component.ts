import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css'],
})

export class Convert implements OnInit {
  response: any;
  rateUSD: any;
  rateEUR: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {

    let myHeaders: HttpHeaders = new HttpHeaders();
    myHeaders = myHeaders.append('Content-Type', 'application/json');
    myHeaders = myHeaders.append("apikey", "85G3Ou0cnHfZmh5zO86CQY5dGN8nphcc");
    
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
