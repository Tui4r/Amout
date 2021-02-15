import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-amout',
  templateUrl: './amout.component.html',
  styleUrls: ['./amout.component.css'],
})
export class AmoutComponent implements OnInit {
  todayISOString: string = new Date().toISOString();
  public stage: User[];

  constructor(private db: AngularFireDatabase) {
    this.getStarted();
  }
  ngOnInit(): void {}

  refresh(): void {
    window.location.reload();
  }
  async getStarted() {
    var users: User[];
    await this.getUserRealtime().then((value) => {
      users = value as User[];
    });

    this.stage = users;
    console.log(this.stage);
  }

  getUserRealtime() {
    return new Promise((resolve, _reject) => {
      this.db
        .list('/Status')
        .valueChanges()
        .subscribe((value) => {
          resolve(value);
        });
    });
  }
}

class User {
  ph: number;
  tem: number;
  hu: number;
  hr: number;
  ss: number;
  mm: number;
}
