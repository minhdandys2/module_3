import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  editProductForm: FormGroup;
  index = +this.activeRoute.snapshot.paramMap.get('id');
  constructor(private fb: FormBuilder,
              private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private route: Router) {
  }
  ngOnInit() {
    const product = this.productService.findById(this.index);
    this.editProductForm = this.fb.group({
      id: [product.id, [Validators.required, Validators.minLength(1)]],
      name: [product.name, [Validators.required, Validators.minLength(2)]],
      price: [product.price, [Validators.required, Validators.minLength(4)]]
    });
  }

  submit() {
    this.productService.update(this.editProductForm.value, this.index);
    return this.route.navigate(['/products']);
  }

  get id() {
    return this.editProductForm.get('id');
  }

  get name() {
    return this.editProductForm.get('name');
  }

  get price() {
    return this.editProductForm.get('price');
  }
}
