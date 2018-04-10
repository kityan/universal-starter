import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-list-item',
  template: `
    <p [ngStyle]="{'background': this.item.color}" [ngClass]="{'processing': this.processing}">
      {{this.item.title}}
      <button [disabled]="this.processing" (click)="onDeleteButtonClick()">delete</button>
    </p>
  `,
  styles: ['p {padding: 10px;}', 'p.processing {opacity: 0.2}']
})
export class ListItemComponent implements OnInit {
  @Input() public processing: boolean;
  @Input() public item: IListItem;
  @Output() public delete = new EventEmitter<ListItemComponent>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteButtonClick() {
    if (this.processing) { return; }
    this.processing = true;
    this.delete.emit(this);
  }

}
