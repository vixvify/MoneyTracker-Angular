import { Component, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Data {
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
    this.onSend.emit(data);
  }
}
