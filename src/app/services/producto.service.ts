import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  constructor() {}

  getProductos() {
    return [
      {
        foto:
          'https://http2.mlstatic.com/cerveza-corona-D_NQ_NP_979411-MLC20550406761_012016-F.jpg',
        descripcion: '6 pack coronas',
        precio: 15,
        categoria: 'Cervezas',
        stock: 20,
        fecha: new Date()
      },
      {
        foto:
          'https://http2.mlstatic.com/cerveza-corona-D_NQ_NP_979411-MLC20550406761_012016-F.jpg',
        descripcion: '6 pack coronoa',
        precio: 15,
        categoria: 'Cervezas',
        stock: 20,
        estado: 'I'
      },
      {
        foto:
          'https://http2.mlstatic.com/cerveza-corona-D_NQ_NP_979411-MLC20550406761_012016-F.jpg',
        descripcion: '6 pack coronoa',
        precio: 15,
        categoria: 'Cervezas',
        stock: 20
      }
    ];
  }
}
