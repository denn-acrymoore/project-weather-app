import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  myDate = Date.now();
  myDate2 = Date.now() + 24 * 60 * 60 * 1000;
  myDate3 = Date.now() + (24 * 60 * 60 * 1000)*2;
  myDate4 = Date.now() + (24 * 60 * 60 * 1000)*3;
  myDate5 = Date.now() + (24 * 60 * 60 * 1000)*4;
  myDate6 = Date.now() + (24 * 60 * 60 * 1000)*5;
  myDate7 = Date.now() + (24 * 60 * 60 * 1000)*6;

  WeatherData:any;
  futureTemperature: any;
  constructor() { }


  ngOnInit(){
    this.WeatherData = {
      main : {},
      isDay: true
    };
    this.futureTemperature = [-1, -1, -1, -1, -1, -1];
    this.getWeatherData();
    console.log(this.WeatherData);
    console.log(this.myDate);
  }

  getWeatherData(){
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=6.2088&lon=106.8456&exclude=minutely,hourly,alerts&appid=75f224a9280b9d612de738569c117dbb')
    //fetch('https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=75f224a9280b9d612de738569c117dbb')
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
    
  }

  setWeatherData(data: any){
    this.WeatherData = data;
    //let sunsetTime = new Date(this.WeatherData.current.sunset * 1000);
    //this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    //let currentDate = new Date();
    //this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.current.temp - 273.15).toFixed(1);
    this.futureTemperature[0] = (this.WeatherData.daily[0].temp.day - 273.15).toFixed(1);
    this.futureTemperature[1] = (this.WeatherData.daily[1].temp.day - 273.15).toFixed(1);
    this.futureTemperature[2] = (this.WeatherData.daily[2].temp.day - 273.15).toFixed(1);
    this.futureTemperature[3] = (this.WeatherData.daily[3].temp.day - 273.15).toFixed(1);
    this.futureTemperature[4] = (this.WeatherData.daily[4].temp.day - 273.15).toFixed(1);
    this.futureTemperature[5] = (this.WeatherData.daily[5].temp.day - 273.15).toFixed(1);
    //this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    //this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    //this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
    this.WeatherData.current.wind_speed = (this.WeatherData.current.wind_speed).toFixed(0);
  }
}