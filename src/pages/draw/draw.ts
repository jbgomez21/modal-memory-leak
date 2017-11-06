import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ViewController } from 'ionic-angular';

declare var paper;

import { Utils } from '../../utils/utils';

@Component({
  selector: 'page-draw',
  templateUrl: 'draw.html',
})
export class DrawPage implements OnInit {
  //canvas
  @ViewChild('canvas') public canvasElement: ElementRef;
  raster: any;
  scope: any;

  constructor(public viewController: ViewController) {
  }

  ngOnInit() {
    this.scope = new paper.PaperScope();
    this.scope.setup(this.canvasElement.nativeElement);

    Utils.uriToBase64('assets/imgs/43.png','image/png').then(image => {
      let raster = new paper.Raster(image);
      raster.onLoad = () => {
          raster.fitBounds(paper.view.bounds);
      }
    });

  }

  close() {
    this.viewController.dismiss();
  }

  ngOnDestroy() {
    this.scope.remove();
  }

}
