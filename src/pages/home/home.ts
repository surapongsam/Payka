import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  texts = ['Home','Counter Band','Korean Bands','Skincare','Makeup','Personal Care','Perfume','Supplement','Tool','New','Member Offer','Beauty Battle']

  constructor(public navCtrl: NavController) {

  }

}
