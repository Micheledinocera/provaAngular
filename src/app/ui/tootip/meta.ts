import { KitOverlayPosition } from '@ngx-kit/core';

export type TootipColors = 'default' | 'primary';

export interface TootipOptions {
  color?: TootipColors;
  position?: KitOverlayPosition;
}
