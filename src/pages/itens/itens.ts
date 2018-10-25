import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItemPage } from '../item/item';

import { ItensService } from '../../providers/itens-service/itens-service'; 
import { Item } from '../../interfaces/item';

@Component({
  selector: 'page-itens',
  templateUrl: 'itens.html',
})
export class ItensPage {

  itens: Item[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public itensService: ItensService) {
      this.itens = itensService.getItens();
  }

  selecionaItem(id: string) {
    console.log("Item " + id + " selecionado");
  }

  editaItem(id: string) {
    this.navCtrl.push(ItemPage, { id: id, novo: false });
  }

  deletaItem(id: string) {
    console.log("Item " + id + " deletado");
  }

  novoItem(){
    this.navCtrl.push(ItemPage, { id: '0', novo: true });
  }

}
