import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit, OnChanges {
  @Input() star: number;
  @Output() clickStar = new EventEmitter<string>();
  widthStar: number;

  constructor() {
  }

  ngOnChanges() {
    this.widthStar = this.star * 75 / 5;
  }
  click() {
    this.clickStar.emit('This star is ' + this.star);
  }
  ngOnInit() {
  }

}
