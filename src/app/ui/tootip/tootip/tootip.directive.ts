import { ComponentRef, Directive, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, } from '@angular/core';
import { KitOverlayService } from '@ngx-kit/core';
import { TootipOptions } from '../meta';
import { TootipViewComponent } from '../tootip-view/tootip-view.component';

/**
 * @todo simplify proxying
 */
@Directive({
  selector: '[tootip]',
})
export class TootipDirective implements OnInit, OnChanges, OnDestroy {
  @Input() tootip: string;

  @Input() tootipOptions: TootipOptions = {};

  private componentRef: ComponentRef<TootipViewComponent>;

  constructor(
    private el: ElementRef,
    private overlayService: KitOverlayService,
  ) {
  }

  ngOnChanges() {
    this.proxyProps();
  }

  ngOnDestroy() {
    this.hide();
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  mouseenterHandler() {
    this.show();
  }

  @HostListener('mouseleave')
  mouseleaveHandler() {
    this.hide();
  }

  private hide() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private proxyProps() {
    if (this.componentRef) {
      const instance = this.componentRef.instance;
      instance.anchorEl = this.el.nativeElement;
      instance.content = this.tootip;
      instance.color = this.tootipOptions.color || 'default';
      instance.position = this.tootipOptions.position || 'top';
      instance.ngOnChanges();
    }
  }

  private show() {
    this.componentRef = this.overlayService.hostComponent<TootipViewComponent>(TootipViewComponent);
    this.proxyProps();
  }
}
