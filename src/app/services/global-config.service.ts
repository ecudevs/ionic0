import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalConfigService {
  constructor() {}

  getUrl() {
    // return 'http://localhost:9000';
    return 'https://api-ionic0.herokuapp.com';
  }
}
