import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItensService {

  constructor(public http: Http) {
    console.log('Hello ItensService Provider');
  }

}
