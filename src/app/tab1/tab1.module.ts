import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ProductoCardComponent } from '../components/producto-card/producto-card.component';
import { ProductoFormComponent } from '../components/producto-form/producto-form.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, ProductoCardComponent, ProductoFormComponent],
  entryComponents: [ProductoCardComponent, ProductoFormComponent]
})
export class Tab1PageModule {}
