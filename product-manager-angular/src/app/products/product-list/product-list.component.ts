import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../ProductInterface';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  message: string;
  productFilter: ProductInterface[] = [];
  show = true;
  products = this.productService.getAll();

  constructor(private productService: ProductService) {
  }

  showHide() {
    this.show = !this.show;
  }

  showMessage(event) {
    this.message = event;
  }

  delete(index) {
    this.productService.delete(index);
  }

  filter(keyword) {
    this.productFilter = (keyword) ? this.search(keyword) : this.products;
  }

  search(keyword) {
    return this.products.filter(
      product => product.name.indexOf(keyword) !== -1
    );
  }

  ngOnInit() {
    this.productFilter = this.products;
  }
}
