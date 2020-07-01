import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as glob from '../globals';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.scss']
})
export class SourceComponent implements OnInit {
  private baseAppUrl = glob.baseAppUrl;
  userItems: any;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get(this.baseAppUrl + 'list').subscribe((data) => {
      this.userItems = data;

    });
  }


}
