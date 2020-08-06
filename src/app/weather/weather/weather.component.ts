import { Weather } from './../../models/weather.model';
import { WeatherService } from './../../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  info = new Weather();
  location: any;
  current: any;    
  request: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {    
    this.getInfo();
    this.init();
  }

  getInfo(){
    this.weatherService.getClimaDados().subscribe(
      data => {
         this.info = data;
        //this.location = data.location;    
        console.log(this.info);
      }
    )
  }

  init(){
    this.info.location = {};
    this.info.current = {};
    this.info.request = {};
    // this.location = {     
    // }
  }
}
