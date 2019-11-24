import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-size-editore',
  templateUrl: './font-size-editore.component.html',
  styleUrls: ['./font-size-editore.component.css']
})
export class FontSizeEditoreComponent implements OnInit {
  color = 'red';
  fontSize = 14;

  constructor() {
  }

  onChangerFontSize(value) {
    this.fontSize = value;
  }

  onChangerColor(value) {
    this.color = value;
  }

  ngOnInit() {
  }

}
