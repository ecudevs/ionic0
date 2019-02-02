import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor(private http: Http) {}

  getProductos() {
    return this.http.get('http://localhost:9000/producto/').pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }
  insert(producto) {
    return this.http.post('http://localhost:9000/producto/', producto).pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }
  actualizar(producto) {
    return this.http.put('http://localhost:9000/producto/', producto).pipe(
      map((response: Response) => {
        return response.json();
      })
    );
  }
}
