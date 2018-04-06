import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/core';
import { TootipViewComponent } from './tootip-view/tootip-view.component';
import { TootipDirective } from './tootip/tootip.directive';

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  declarations: [
    TootipDirective,
    TootipViewComponent,
  ],
  exports: [
    TootipDirective,
  ],
  entryComponents: [
    TootipViewComponent,
  ],
})
export class TootipModule {
}
