import {Component, OnInit} from '@angular/core';
import {AwesomeService} from '../../services/awesome.service';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-awesome-create',
  templateUrl: './awesome-create.component.html',
  styleUrls: ['./awesome-create.component.scss']
})
export class AwesomeCreateComponent implements OnInit {
  addAwesomeForm = this.fb.group({
    tag: ['', [Validators.required, Validators.minLength(2)]],
    url: ['', [Validators.required, Validators.minLength(2)]],
    descriptions: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(private awesomeService: AwesomeService,
              private fb: FormBuilder,
              private route: Router) {
  }

  ngOnInit() {
  }

  get tag() {
    return this.addAwesomeForm.get('tag');
  }

  get url() {
    return this.addAwesomeForm.get('url');
  }

  get descriptions() {
    return this.addAwesomeForm.get('descriptions');
  }

  submit() {
    const data = this.addAwesomeForm.value;
    this.awesomeService.store(data).subscribe((result: IAwesome) => {
      return this.route.navigate(['/awesome']);
    });
  }
}
