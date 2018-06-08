import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
declare var require: any;
var wdk = require("wikidata-sdk");
var request = require('request');
import wiki from 'wikijs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }
  
  onDoActionButton () {
    var inputValue = "nikola tesla"
    //inputValue = (<HTMLInputElement>document.getElementById('inputSearchBox')).value;
    console.log(inputValue);
    var url: any;
    url = wdk.searchEntities({
      search: inputValue,
      language: 'ca',
      limit: '1',
      format: 'json'
    })

    //wikijs
    
      console.log("wikidata info: " + url);
 
      wiki({
        apiUrl: 'https://awoiaf.westeros.org/api.php',
        origin: 'http://localhost:8100'
    }).search('Winterfell');
      

  }

 

  onSearchInput (ev:any) {
    /*
    // set val to the value of the searchbar
    inputSearchValue = ev.target.value;
    console.log(inputSearchValue);
*/
  }

  changeColor(){
    $('#myButton').text('white');
  }

  onSearchWikidataButton ()   {
    //Get entities from a string (If the values aren't available in the 
    //desired language, it will fallback to the English value if available)
    var url: any;
     url = wdk.searchEntities({
      search: "hello",
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
