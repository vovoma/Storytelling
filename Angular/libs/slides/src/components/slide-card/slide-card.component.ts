import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-slide-card',
  templateUrl: './slide-card.component.html',
  styleUrls: ['./slide-card.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          300,
          keyframes([
            style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 })
          ])
        )
      ]),
      transition('* => void', [
        animate(
          300,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
          ])
        )
      ])
    ])
  ]
})
export class SlideCardComponent {
  @Output() deleteSlide: EventEmitter<number> = new EventEmitter(); //event:delete a page of slide
  id: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }
  /*delete slide*/
  deleteSlideFn(event: Event) {
    event.preventDefault();
    this.deleteSlide.emit();
  }

  creatSlide() {
    // const dialog = this.dialog.open(SlideEditorComponent, {  height: '100%', width : '100%'});
    // dialog.componentInstance.slide = this.slide;
    // dialog.componentInstance.slideIndex = this.slideIndex;
    //
    // dialog.afterClosed().subscribe(result => {
    //     if (result !== 'CANCEL') {
    //         this.saveSlide.emit(result);
    //     }
    // });
  }
}