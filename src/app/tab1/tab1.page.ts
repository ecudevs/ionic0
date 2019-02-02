import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ModalController } from '@ionic/angular';
import { ProductoFormComponent } from '../components/producto-form/producto-form.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnChanges {
  productos = [];
  constructor(
    private productoService: ProductoService,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.getProductos();
  }

  ngOnChanges() {}

  getProductos() {
    this.productoService.getProductos().subscribe((data: any) => {
      if (data.success) {
        this.productos = data.productos;
      } else {
        console.log(data.error);
      }
    });
  }

  guardarProducto(producto) {
    if (producto._id) {
      this.productoService.actualizar(producto).subscribe((data: any) => {
        if (data.success) {
          console.log('Guardado');
          this.getProductos();
        } else {
          console.log('Error');
        }
      });
    } else {
      this.productoService.insert(producto).subscribe((data: any) => {
        if (data.success) {
          console.log('Guardado');
          this.getProductos();
        } else {
          console.log('Error');
        }
      });
    }
  }

  editarProducto(indice) {
    const producto = this.productos[indice];
    this.showModal({ ...producto, indice });
  }

  restar(indice) {
    this.productos[indice].stock--;
  }

  async showModal(producto?) {
    const modal = await this.modalController.create({
      component: ProductoFormComponent,
      componentProps: {
        producto: producto || {}
      }
    });
    modal.onDidDismiss().then(respuesta => {
      // {id:, desc}
      // {producto:{id}}
      this.guardarProducto(respuesta.data.producto);
    });
    return await modal.present();
  }
}
