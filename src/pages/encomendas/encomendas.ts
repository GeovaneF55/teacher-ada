import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EncomendasService } from '../../providers/encomendas-service/encomendas-service'; 
import { ItensService } from '../../providers/itens-service/itens-service';

@Component({
  selector: 'page-encomendas',
  templateUrl: 'encomendas.html',
})
export class EncomendasPage {

  itens: Item[];
  encomendas: Encomenda[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public encomendasService: EncomendasService,
    public itensService: ItensService) {
      this.encomendas = encomendasService.getEncomendas();
      this.itens = itensService.getItens();
  }

  selecionaEncomenda(codigo: string) {

  }

  novaEncomenda() {
    
  }

}
