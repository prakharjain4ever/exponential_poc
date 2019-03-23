import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USER DATA TABLE';
  dtOptions: DataTables.Settings = {};
  userArr = [];
  checkedArr = [];
  userData = {};

  ngOnInit() {
    let userDetails = JSON.parse(localStorage.getItem('user'));
    if (userDetails) {
      this.userArr = userDetails;
    }
  }

  addUser(data) {
    this.userArr.push(data);
    localStorage.setItem('user', JSON.stringify(this.userArr));
    this.userData = {};
  }

  selectUser(data) {
    let index = this.checkedArr.indexOf(data);
    if (index == -1) {
      this.checkedArr.push(data);
    } else {
      this.checkedArr.splice(index, 1);
    }
  }

  deleteUser() {
    for (let key of this.checkedArr) {
      for (var i = 0; i <= this.userArr.length; i++) {
        if (key == this.userArr[i]) {
          this.userArr.splice(i, 1);
        }
      }
    }
    localStorage.setItem('user', JSON.stringify(this.userArr));
  }
}