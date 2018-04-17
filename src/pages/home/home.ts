import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
declare var require: any;
var wdk = require("wikidata-sdk");
var request = require('request');

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  
  onDoAction () {
    let alert = this.alertCtrl.create({
      title: 'Mensaje de alerta!',
      subTitle: 'ALERTA ALERTA ALERTA',
      buttons: ['OK']
    });
    alert.present();

  }

  onDoQuery () {
    //Get entities from a string (If the values aren't available in the 
    //desired language, it will fallback to the English value if available)
    const url = wdk.searchEntities({
      search: 'Steve Jobs',
      language: 'ca',
      limit: '1',
      format: 'json'
    })
    console.log(url);

    const jsondata = request({
      url: url,
      json: true
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        body;
      }
    });

    console.log(jsondata);
  }

}
