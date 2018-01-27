import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ShareService {

  private basePath = '/shares';
  constructor(private db: AngularFireDatabase) { }

  addShare(data) {
  const obj = this.db.database.ref(this.basePath);
  obj.push(data);
  console.log('Success');
  }

  getShares(path): Observable<any[]> {
    return this.db.list(path).valueChanges();
  }
}
