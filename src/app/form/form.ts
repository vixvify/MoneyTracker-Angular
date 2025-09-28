import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

export interface Data {
  name: string;
  money: number;
  type: string;
}

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  constructor(private dataservice: DataService, private router: Router) {}
  name = signal<string>('');
  money = signal<number>(0);
  type = signal<string>('');
  onSend = output<Data>();

  sendData() {
    const data: Data = {
      name: this.name(),
      money: this.money(),
      type: this.type(),
    };
    this.dataservice.sendData(data);
    this.router.navigate(['/']);
  }
}
