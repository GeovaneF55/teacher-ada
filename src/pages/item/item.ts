import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ItensService } from '../../providers/itens-service/itens-service'; 

@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
})
export class ItemPage {

  idItem: string;
  tipoItem: string;
  materiaItem: string;
  enunciadoItem: string;
  alternativasItem: Array<[number, string]>;
  corretaItem: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public itensService: ItensService) {
    
    this.idItem = navParams.get('id');

    let itens = itensService.getItens();
    for(let i=0; i<itens.length; i++){
      if(itens[i].id == this.idItem){
        this.tipoItem = itens[i].tipo_item;
        this.materiaItem = itens[i].materia;
        this.enunciadoItem = itens[i].enunciado;
        this.alternativasItem = itens[i].alternativas;
        this.corretaItem = itens[i].correta;
        break;
      }
    }
  }

  /*@ViewChild('enunciado', { read: ElementRef }) enunciado: ElementRef;
  resize() {
    this.enunciado.nativeElement.style.height = this.enunciado.nativeElement.scrollHeight + 'px';
  }*/

  @ViewChildren('area', { read: ElementRef }) area: QueryList<ElementRef>;
  resize(id) {
    this.area._results[id].nativeElement.style.height = this.area._results[id].nativeElement.scrollHeight + 'px';
  }

  gerarPDF() {

  }

  alterar() {

  }

}
