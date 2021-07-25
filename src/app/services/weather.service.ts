import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  uri: string = '';
 

  constructor(private http: HttpClient) { 

    //this.uri = `https://api.openweathermap.org/data/2.5/weather?q=banfield,argentina&appid=204a3108bcfcf9c62f8b1342bb34ff39&units=metric`;
    this.uri = `https://api.openweathermap.org/data/2.5/weather?lat=-34.74206306265408&lon=-58.39864977413688&appid=204a3108bcfcf9c62f8b1342bb34ff39&units=metric`;
  }

  getWeather(){
    return this.http.get(this.uri);
  }
}
