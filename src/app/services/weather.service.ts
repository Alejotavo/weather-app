import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  uri: string = '';
  varLong: number;
  varLat: number;
 

  constructor(private http: HttpClient) { 

    this.uri = `https://api.openweathermap.org/data/2.5/weather?`;
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resp => {
                resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
                 this.varLong = resp.coords.longitude;
                 this.varLat = resp.coords.latitude;
                 console.log('varLat:', this.varLat , 'varLong:', this.varLong );
            },
            err => {
                reject(err);
          });
    });
  }


  getWeather(){
    return this.http.get(`${this.uri}lat=${this.varLat}&lon=${this.varLong}&appid=204a3108bcfcf9c62f8b1342bb34ff39&units=metric`);
  }
}
