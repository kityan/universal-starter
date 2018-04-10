import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {
  public list: IList;
  constructor(private http: HttpClient) { }

  public getList() {
    return this.http.get(`api/list`).toPromise()
      .then(data => this.list = <IList>data);
  }

  public deleteItemByIndex(index: number) {
    return this.http.delete(`api/list/${index}`).toPromise()
      .then(() => this.list.items.splice(index, 1))
      .catch(err => {
        console.error('API Server error: ', err);
        throw(new Error());
      });
  }

}
