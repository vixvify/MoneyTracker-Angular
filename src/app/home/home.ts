import { Component } from '@angular/core';
import { List } from '../list/list';
import { Calservice } from '../services/cal.service';
import { signal } from '@angular/core';
import { effect } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [List],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  earn = signal(0);
  pay = signal(0);
  total = signal(0);
  constructor(private calservice: Calservice) {
    effect(() => {
      this.calservice.sendData();
      this.earn.set(this.calservice.earn());
      this.pay.set(this.calservice.pay());
      this.total.set(this.calservice.total());
    });
  }
}
