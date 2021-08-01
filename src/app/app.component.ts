import { summaryFileName } from '@angular/compiler/src/aot/util';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { timer } from 'rxjs';
import {WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data: any;
  date: Date;
  sunrise: Date;
  sunset: Date;

  latitude: any;
  longitude: any;


  constructor(private weatherService: WeatherService) { };

  ngOnInit(){
     timer(0,1000).subscribe(() => {
       this.date = new Date;
       this.weatherService.getWeather().subscribe((res) => {
         this.data = res;
         console.log(res)
        });
     });
    
     this.getLocation();
  }

  getLocation() {
    this.weatherService.getPosition().then(pos => {
        this.latitude = pos.lat;
        this.longitude = pos.lng;
        console.log(this.latitude , this.longitude)
    });
}

}
