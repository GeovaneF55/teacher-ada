import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EncomendasService {

  constructor(public http: Http) {
    console.log('Hello EncomendasService Provider');
  }

}
