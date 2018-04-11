import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/core';
import { CustomSelectComponent } from './custom-select/custom-select.component';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  declarations: [
    CustomSelectComponent,
  ],
  exports: [
    CustomSelectComponent,
  ],
})
export class CustomSelectModule {
}
