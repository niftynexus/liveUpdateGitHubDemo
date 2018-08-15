import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CssSelector } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: ['/home.scss']  
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
