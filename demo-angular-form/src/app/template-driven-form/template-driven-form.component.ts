import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {
  profile = {
    userName: 'minh',
    email: 'minh@gmail.com',
    tel: '13214444'
  };
  constructor() {
  }

  onSubmit(profileForm) {
    console.log(profileForm);
  }

  ngOnInit() {
  }
}
