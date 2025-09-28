import { Component, signal } from '@angular/core';
import { DataService } from '../services/data.service';
import { Data } from '../form/form';
import { effect } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  data = signal<Data[]>([]);
  constructor(private dataservice: DataService) {
    effect(() => {
      const newdata = this.dataservice.data();
      if (newdata) {
        this.data.set(newdata);
      }
    });
  }
}
