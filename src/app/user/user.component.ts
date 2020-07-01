import {Component, OnInit} from '@angular/core';
import {User} from '../User';
import {HttpClient} from '@angular/common/http';
import * as glob from '../globals';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private baseAppUrl = glob.baseAppUrl;

  newUser: User = new User();
  userItems: any;
  addmoney: number;
  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get(this.baseAppUrl + 'users').subscribe((data) => {
      this.userItems = data;
    });
  }

  addUser() {
    const body = {
      firstName: this.newUser.firstName,
      lastName: this.newUser.lastName,
      email: this.newUser.email,
      amountOfMoney: this.newUser.amountOfMoney
    };
    this.httpClient.post(this.baseAppUrl + 'create_user', body).subscribe((data) => {
      this.userItems.push(body);
    });
    this.newUser.firstName = '';
    this.newUser.lastName = '';
    this.newUser.email = '';
    this.newUser.amountOfMoney = 0;
  }

  addMoney(editSource: any) {
    let moneyToAdd = prompt("Please enter the amount you want to add:");
    const targetIdx = this.userItems.map(item => item.id).indexOf(editSource.id);
    this.userItems[targetIdx].amountOfMoney = editSource.amountOfMoney + Number(moneyToAdd);
    this.httpClient.put(this.baseAppUrl + 'add_money?id='+editSource.id + '&money=' + moneyToAdd).subscribe((data) => {
    });
  }
}
