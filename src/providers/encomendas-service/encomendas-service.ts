import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Encomenda } from '../../interfaces/encomenda';
import { TipoItem } from '../../interfaces/tipo_item';

@Injectable()
export class EncomendasService {

  encomendas: Array<Encomenda> = [
    { id: '1', id_item: null, tipo_item: TipoItem.unico, inedita: true, desc: "Teste 1" },
    { id: '2', id_item: null, tipo_item: TipoItem.multiplo, inedita: true, desc: "Teste 2" },
    { id: '3', id_item: null, tipo_item: TipoItem.multiplo, inedita: false, desc: "Teste 3" },
    { id: '4', id_item: null, tipo_item: TipoItem.unico, inedita: false, desc: "Teste 4" },
    { id: '5', id_item: null, tipo_item: TipoItem.asserc_razao, inedita: true, desc: "Teste 5" },
    { id: '6', id_item: null, tipo_item: TipoItem.asserc_razao, inedita: false, desc: "Teste 6" },
  ]

  ultimoCodigo = '6';

  constructor(public http: Http) {
    console.log('Hello EncomendasService Provider');
  }

  getEncomendas() {
    return this.encomendas;
  }

}
