import { signal } from '@angular/core';
import { Injectable } from '@angular/core';
import { Data } from '../form/form';

@Injectable({ providedIn: 'root' })
export class DataService {
  data = signal<Data[]>([]);
  constructor() {
    const isStored = localStorage.getItem('data');
    if (isStored) {
      this.data.set(JSON.parse(isStored));
    }
  }
  sendData(newdata: Data) {
    this.data.update((curr: any) => [...curr, newdata]);
    localStorage.setItem('data', JSON.stringify(this.data()));
  }
}
