import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UrlHandlingStrategy } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'http://api.weatherstack.com/current?access_key=6676a9e17388241e4374b1e655e6fe9a&query=vitoria';

  constructor(private httpClient: HttpClient) { }

  getClimaDados(): Observable<any>{
    return this.httpClient.get<any>(this.url);
  }

}


