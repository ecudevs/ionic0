import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import {
  ModalController,
  ToastController,
  AlertController
} from '@ionic/angular';
import { ProductoFormComponent } from '../components/producto-form/producto-form.component';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnChanges {
  productos = [];
  constructor(
    private productoService: ProductoService,
    private modalController: ModalController,
    private toastController: ToastController,
    private alertController: AlertController,
    private local: LocalService
  ) {}

  ngOnInit() {
    this.getProductos();
  }

  ngOnChanges() {}

  getProductos(event?) {
    this.productoService.getProductos().subscribe(
      (data: any) => {
        if (data.success) {
          this.productos = data.productos;
          this.local.guardarProductos(data.productos);
          if (event) {
            event.target.complete();
          }
        } else {
          this.showToast('Ocurrió un error ' + data.error, 1500);
          if (event) {
            event.target.complete();
          }
        }
      },
      error => {
        // this.showAlert('Error', 'Lo sentimos', error.message);
        this.local
          .getProductos()
          .then(productos => {
            this.productos = productos;
          })
          .catch(er => {
            this.showAlert('Error', 'Lo sentimos', er.message);
          });
      }
    );
  }

  refrescar(event) {
    this.getProductos(event);
  }

  guardarProducto(producto) {
    if (producto._id) {
      this.productoService.actualizar(producto).subscribe(
        (data: any) => {
          if (data.success) {
            this.getProductos();
          } else {
            this.showToast('Ocurrió un error ' + data.error, 1500);
          }
        },
        error => {
          this.showAlert('Error', 'Lo sentimos', error.message);
        }
      );
    } else {
      this.productoService.insert(producto).subscribe(
        (data: any) => {
          if (data.success) {
            this.getProductos();
          } else {
            this.showToast('Ocurrió un error ' + data.error, 1500);
          }
        },
        error => {
          this.showAlert('Error', 'Lo sentimos', error.message);
        }
      );
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

  async showToast(mensaje, duracion) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion
    });
    toast.present();
  }

  async showAlert(header, subHeader, message) {
    const alert = await this.alertController.create({
      header,
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
