import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
