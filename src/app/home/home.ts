import { Component } from '@angular/core';
import { List } from '../list/list';

@Component({
  selector: 'app-home',
  imports: [List],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
