import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-list-item',
  template: `
    <p [ngStyle]="{'background-color': this.item.color}" [ngClass]="{'loader': this.processing}">
      {{this.item.title}}
      <button [disabled]="this.processing" (click)="onDeleteButtonClick()">delete</button>
    </p>
  `,
  styles: ['p {padding: 10px; border: 1px solid #000;}', 'p.loader {background-color: #FFF !important}']
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
