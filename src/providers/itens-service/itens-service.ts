import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { TipoItem } from '../../interfaces/tipo_item';
import { Item } from '../../interfaces/item';

@Injectable()
export class ItensService {

  itens: Array<Item> = [
    { id: '1', tipo_item: TipoItem.unico,
      curso: "Ciência da Computação",
      materia: "AEDs I",
      enunciado: "Pergunta T1",
      alternativas: [
        [1, "Reposta R1 de T1"],
        [2, "Reposta R2 de T1"],
        [3, "Reposta R3 de T1"],
        [4, "Reposta R4 de T1"],
        [5, "Reposta R5 de T1"]
      ], correta: 1
    },
    { id: '2', tipo_item: TipoItem.asserc_razao,
      curso: "Ciência da Computação",
      materia: "Redes I",
      enunciado: "Pergunta T2",
      alternativas: [
        [1, "Reposta R1 de T2"],
        [2, "Reposta R2 de T2"],
        [3, "Reposta R3 de T2"],
        [4, "Reposta R4 de T2"],
        [5, "Reposta R5 de T2"]
      ], correta: 2
    },
    { id: '3', tipo_item: TipoItem.multiplo,
      curso: "Ciência da Computação",
      materia: "Processamento de Imagens",
      enunciado: "Pergunta T3",
      alternativas: [
        [1, "Reposta R1 de T3"],
        [2, "Reposta R2 de T3"],
        [3, "Reposta R3 de T3"],
        [4, "Reposta R4 de T3"],
        [5, "Reposta R5 de T3"]
      ], correta: 5
    },
    { id: '4', tipo_item: TipoItem.multiplo,
      curso: "Ciência da Computação",
      materia: "Banco de Dados",
      enunciado: "Pergunta T4",
      alternativas: [
        [1, "Reposta R1 de T4"],
        [2, "Reposta R2 de T4"],
        [3, "Reposta R3 de T4"],
        [4, "Reposta R4 de T4"],
        [5, "Reposta R5 de T4"]
      ], correta: 4
    },
    { id: '5', tipo_item: TipoItem.multiplo,
      curso: "Ciência da Computação",
      materia: "Linguagem de Programação",
      enunciado: "Pergunta T5",
      alternativas: [
        [1, "Reposta R1 de T5"],
        [2, "Reposta R2 de T5"],
        [3, "Reposta R3 de T5"],
        [4, "Reposta R4 de T5"],
        [5, "Reposta R5 de T5"]
      ], correta: 3
    },
    { id: '6', tipo_item: TipoItem.asserc_razao,
      curso: "Ciência da Computação",
      materia: "Cálculo I",
      enunciado: "Pergunta T6",
      alternativas: [
        [1, "Reposta R1 de T6"],
        [2, "Reposta R2 de T6"],
        [3, "Reposta R3 de T6"],
        [4, "Reposta R4 de T6"],
        [5, "Reposta R5 de T6"]
      ], correta: 2
    }
  ];

  ultimoCodigo = '6';

  constructor(public http: Http) {
    console.log('Hello ItensService Provider');
  }

  getItens() {
    return this.itens;
  }

}
