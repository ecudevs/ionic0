import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  constructor(private storage: NativeStorage) {}

  guardarProductos(productos) {
    this.storage
      .setItem('productos', productos)
      .then(() => {
        console.log('Guardados localmente');
      })
      .catch(e => {
        debugger;
        console.log('Error al guardar' + e.message);
      });
  }

  getProductos() {
    return this.storage.getItem('productos');
  }
}
