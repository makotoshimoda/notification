import { Injectable } from '@angular/core';
declare var deepstream: any;
@Injectable()
export class DsService {
  get dsInstance() {
    return deepstream('188.166.186.146').login()
  }
}
