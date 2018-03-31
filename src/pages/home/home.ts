import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  weather: any = []
  city : any = []
  list : any = []

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.weather = this.http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=9fd7a449d055dba26a982a3220f32aa2").subscribe(data => {
      //console.log(data["city"]);
      // console.log(data["list"])
      this.city = data["city"];
      this.list = data["list"];
    }, (err) => {
      console.log(err);
    })
  }
}
