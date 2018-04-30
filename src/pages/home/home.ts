import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { empty } from 'rxjs/Observer';
import * as $ from 'jquery';
import { asPureExpressionData } from '@angular/core/src/view';
declare var require: any;
var wdk = require("wikidata-sdk");
var request = require('request');
var inputSearchValue = 'empty';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }
  
  onDoActionButton () {
    var inputValue = "hello"
    //inputValue = (<HTMLInputElement>document.getElementById('inputSearchBox')).value;
    console.log(inputValue);
    /*let alert = this.alertCtrl.create({
      title: 'Mensaje de alerta!',
      subTitle: inputValue,
      buttons: ['OK']
    });
    alert.present();
    */

  }

 

  onSearchInput (ev:any) {
    
    // set val to the value of the searchbar
    inputSearchValue = ev.target.value;
    console.log(inputSearchValue);

  }

  changeColor(){
    $('#myButton').text('white');
  }

  onSearchWikidataButton ()   {
    //Get entities from a string (If the values aren't available in the 
    //desired language, it will fallback to the English value if available)
var url="hello";
     url = wdk.searchEntities({
      search: inputSearchValue,
      language: 'ca',
      limit: '1',
      format: 'json'
    })

 /*   console.log(url);
    var aux;
    var getJSON = function(url, callback) {
      debugger;
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'json';
      xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
          debugger;

          callback(null, xhr.response);
        } else {
          debugger;
          callback(status, xhr.response);
        }
      };
      xhr.send();
  };
  console.log(getJSON);
  $(#miuiusis).val(aux.Vale)
aux.Value.nombre
  }

  */

}
}
