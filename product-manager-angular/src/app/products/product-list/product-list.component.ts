import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../../ProductInterface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  message: string;
  productFilter: ProductInterface[] = [];
  products: ProductInterface[] = [
    {
      id: 1,
      name: 'cam',
      price: 20000,
      image: 'assets/images/anime3.jpg',
      star: 4
    },
    {
      id: 2,
      name: 'tao',
      price: 20000,
      image: 'assets/images/anime3.jpg',
      star: 5
    },
    {
      id: 3,
      name: 'gao',
      price: 343412,
      image: 'assets/images/anime3.jpg',
      star: 2
    },
    {
      id: 4,
      name: 'nhan',
      price: 44344434,
      image: 'assets/images/anime3.jpg',
      star: 4
    }
  ];

  constructor() {
  }

  showMessage(event) {
    this.message = event;
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

}
