import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItensService } from '../../providers/itens-service/itens-service'; 

@Component({
  selector: 'page-itens',
  templateUrl: 'itens.html',
})
export class ItensPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public itensService: ItensService) {
      // get Itens
  }

  selecionaItem(codigo: string) {

  }

  novoItem(){
    
  }

}
