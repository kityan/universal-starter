import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { ListItemComponent } from './listItem.component';

@Component({
  selector: 'app-list',
  template: `
    <div *ngIf="list">
      <h3>{{list.title}}</h3>
      <app-list-item [item]="listItem" *ngFor="let listItem of list.items" (delete)="delete($event)"></app-list-item>
    </div>
  `
})
export class ListComponent implements OnInit {
  public message: string;
  public list: IList;

  constructor(private ls: ListService) { }

  ngOnInit() {
    this.ls.getList().then(data => this.list = <IList>data);
  }

  delete(listItem: ListItemComponent) {
    const index: number = this.list.items.indexOf(listItem.item);
    this.ls.deleteItemByIndex(index)
      .catch(() => {
        console.log('Restoring item style due to API server error');
        listItem.processing = false;
      });
  }


}
