import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.scss']
})
export class ProductoCardComponent implements OnInit {
  @Input() producto: any = {};
  @Input() indice: number;
  @Output() agregar = new EventEmitter<number>();
  @Output() editar = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  _agregar() {
    this.agregar.next(this.indice);
  }

  _editar() {
    this.editar.next(this.indice);
  }
}
