import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitPointerModule } from '@ngx-kit/core';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  imports: [
    CommonModule,
    KitPointerModule,
  ],
  declarations: [
    SliderComponent,
  ],
  exports: [
    SliderComponent,
  ],
})
export class SliderModule {
}
