import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CarouselComponent
  ]
})
export class MintModule { }
