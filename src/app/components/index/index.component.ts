import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShareService } from '../../share.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public shares: Observable<any[]>;
  constructor(private shareservice: ShareService) { }

  ngOnInit() {
    this.shares = this.getShares('/shares');
  }
  getShares(path) {
    return this.shareservice.getShares(path);
  }


}
