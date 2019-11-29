import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../../services/awesome.service';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.scss']
})
export class AwesomeListComponent implements OnInit {
  awesomes: IAwesome[] = [];

  constructor(private awesomeService: AwesomeService) {
  }

  ngOnInit() {
    this.awesomeService.getAll().subscribe((result: IAwesome[]) => {
      this.awesomes = result;
    });
  }
}
