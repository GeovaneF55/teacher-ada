import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EncomendasService } from '../../providers/encomendas-service/encomendas-service'; 

@Component({
  selector: 'page-encomendas',
  templateUrl: 'encomendas.html',
})
export class EncomendasPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public encomendasService: EncomendasService) {
      // get Encomendas
  }

  selecionaEncomenda(codigo: string) {

  }

  novaEncomenda() {
    
  }

}
