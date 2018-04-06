import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitClassModule } from '@ngx-kit/core';
import { NotificationHostComponent } from './notification-host/notification-host.component';

@NgModule({
  imports: [
    CommonModule,
    KitClassModule,
  ],
  declarations: [
    NotificationHostComponent,
  ],
  exports: [
    NotificationHostComponent,
  ],
})
export class NotificationModule {
}
