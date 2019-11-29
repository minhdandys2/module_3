import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AwesomeService} from '../../services/awesome.service';
import {IAwesome} from '../iawesome';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.scss']
})
export class AwesomeEditComponent implements OnInit {
  editAwesomeForm = this.fb.group({
    tag: [''],
    url: [''],
    descriptions: ['']
  });
  id = +this.activateRoute.snapshot.paramMap.get('id');

  constructor(private fb: FormBuilder,
              private activateRoute: ActivatedRoute,
              private awesomeService: AwesomeService,
              private route: Router) {
  }

  ngOnInit() {
    this.awesomeService.findById(this.id).subscribe((result: IAwesome) => {
      this.editAwesomeForm = this.fb.group({
        tag: [result.tag, [Validators.required, Validators.minLength(2)]],
        url: [result.url, [Validators.required, Validators.minLength(2)]],
        descriptions: [result.descriptions, [Validators.required, Validators.minLength(2)]],
      });
    });
  }

  get tag() {
    return this.editAwesomeForm.get('tag');
  }

  get url() {
    return this.editAwesomeForm.get('url');
  }

  get descriptions() {
    return this.editAwesomeForm.get('descriptions');
  }

  submit() {
    const data = this.editAwesomeForm.value;
    this.awesomeService.update(data, this.id).subscribe((result: IAwesome) => {
      return this.route.navigate(['/awesome']);
    });
  }

  delete(id) {
    if (confirm('Ban co muon xoa khong?')) {
      this.awesomeService.delete(id).subscribe((result: IAwesome) => {
        return this.route.navigate(['/awesome']);
      });
    }
  }
}
