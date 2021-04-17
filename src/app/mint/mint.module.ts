import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CarouselComponent,
    AboutComponent
  ]
})
export class MintModule { }
