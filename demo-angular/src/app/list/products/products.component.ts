import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../ProductInterface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: ProductInterface[] = [
    {
      id: 1,
      name: 'Cam',
      price: 1223,
      image: 'assets/images/1.jpg',
      star: 4
    }, {
      id: 2,
      name: 'Chanh',
      price: 1223,
      image: 'assets/images/1.jpg',
      star: 3
    }, {
      id: 1,
      name: 'Ngan',
      price: 127565,
      image: 'assets/images/1.jpg',
      star: 2.5
    }
  ];
  withImage = 100;
  show = true;
  productFilter: ProductInterface[] = [];
  message: string;

  constructor() {
  }

  showHide() {
    this.show = !this.show;
  }

  delete(index) {
    this.products.splice(index, 1);
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

  showMessage(even) {
    this.message = even;
  }
}
