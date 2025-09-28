import { signal } from '@angular/core';
import { Injectable } from '@angular/core';
import { Data } from '../form/form';

@Injectable({ providedIn: 'root' })
export class Calservice {
  data = signal<Data[]>([]);
  earn = signal(0);
  pay = signal(0);
  total = signal(0);
  constructor() {
    const isStored = localStorage.getItem('data');
    if (isStored) {
      this.data.set(JSON.parse(isStored));
    }
  }
  sendData() {
    const earn = this.data()
      .filter((e) => e.type === 'รายรับ')
      .map((e) => Number(e.money))
      .reduce((sum, num) => {
        sum += num;
        return sum;
      }, 0);
    const pay = this.data()
      .filter((e) => e.type === 'รายจ่าย')
      .map((e) => Number(e.money))
      .reduce((sum, num) => {
        sum += num;
        return sum;
      }, 0);
    const total = earn - pay;
    this.earn.set(earn);
    this.pay.set(pay);
    this.total.set(total);
  }
}
