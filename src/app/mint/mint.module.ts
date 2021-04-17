import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { SharedModule } from '../shared/shared.module';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';



@NgModule({
  declarations: [
    CarouselComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CarouselComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent
  ]
})
export class MintModule { }
