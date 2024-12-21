import {
  Directive,
  ElementRef,
  Injector,
  NgZone,
  ViewContainerRef,
  ChangeDetectorRef,
  Input,
  HostBinding,
  inject,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import {
  CdkColumnDef,
  _CoalescedStyleScheduler,
  _COALESCED_STYLE_SCHEDULER,
} from '@angular/cdk/table';
import {
  ColumnResize,
  ColumnResizeNotifierSource,
  HeaderRowEventDispatcher,
  ResizeStrategy,
} from '@ng-matero/extensions/column-resize';

import { AbstractMatResizable, RESIZABLE_HOST_BINDINGS, RESIZABLE_INPUTS } from './common';

/**
 * Explicitly enables column resizing for a mat-header-cell.
 */
@Directive({
  selector: 'mat-header-cell[resizable], th[mat-header-cell][resizable]',
  host: RESIZABLE_HOST_BINDINGS,
  inputs: RESIZABLE_INPUTS,
})
export class MatResizable extends AbstractMatResizable {
  protected readonly columnDef = inject(CdkColumnDef);
  protected readonly columnResize = inject(ColumnResize);
  protected readonly directionality = inject(Directionality);
  protected readonly elementRef = inject(ElementRef);
  protected readonly eventDispatcher = inject(HeaderRowEventDispatcher);
  protected readonly injector = inject(Injector);
  protected readonly ngZone = inject(NgZone);
  protected readonly overlay = inject(Overlay);
  protected readonly resizeNotifier = inject(ColumnResizeNotifierSource);
  protected readonly resizeStrategy = inject(ResizeStrategy);
  protected readonly styleScheduler = inject<_CoalescedStyleScheduler>(_COALESCED_STYLE_SCHEDULER);
  protected readonly viewContainerRef = inject(ViewContainerRef);
  protected readonly changeDetectorRef = inject(ChangeDetectorRef);
  protected readonly document = inject(DOCUMENT);

  isResizable = true;

  @HostBinding('class') get hasResizableClass() {
    return this.isResizable ? RESIZABLE_HOST_BINDINGS.class : '';
  }

  @Input()
  get resizable() {
    return this.isResizable;
  }
  set resizable(newValue: any) {
    this.isResizable = newValue == null || newValue === '' || newValue;
  }
}
