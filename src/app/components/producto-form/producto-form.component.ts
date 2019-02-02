import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.scss']
})
export class ProductoFormComponent implements OnInit {
  @Input() producto: any = {};
  @Output() guardar = new EventEmitter<any>();

  categorias = [
    {
      text: 'Cervezas',
      value: 'CERVEZAS'
    },
    {
      text: 'Comida',
      value: 'COMIDA'
    },
    {
      text: 'Otros',
      value: 'OTROS'
    }
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  _guardar() {
    // this.guardar.next(this.producto);
    // this.producto = {};
    if (this.producto.indice) {
      this.producto.nuevo = true;
    }
    this.modalController.dismiss({
      producto: this.producto
    });
  }
}
