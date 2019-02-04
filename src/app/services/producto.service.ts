import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { GlobalConfigService } from './global-config.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: Http, private config: GlobalConfigService) {}

  getProductos() {
    return this.http.get(this.config.getUrl() + '/producto/').pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }
  insert(producto) {
    return this.http.post(this.config.getUrl() + '/producto/', producto).pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }
  actualizar(producto) {
    return this.http.put(this.config.getUrl() + '/producto/', producto).pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }
}
