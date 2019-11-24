import {Component, OnInit} from '@angular/core';
import {ProductInterface} from '../ProductInterface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  constructor() {
  }

  products: ProductInterface[] = [
    {
      id: 1,
      name: 'tao',
      price: 1123144,
      image: 'assets/images/4.jpg'
    },
    {
      id: 2,
      name: 'cam',
      price: 1123144,
      image: 'assets/images/4.jpg'
    },
    {
      id: 3,
      name: 'vai',
      price: 4654465,
      image: 'assets/images/4.jpg'
    },
    {
      id: 4,
      name: 'nhan',
      price: 45646,
      image: 'assets/images/4.jpg'
    },
  ];

  productFilter: ProductInterface[] = [];
  filter(keyword) {
    this.productFilter = (keyword) ? this.search(keyword) : this.products;
  }

  search(keyword) {
    return this.products.filter(
      product => product.name.indexOf(keyword) !== -1
    )
      ;
  }

  ngOnInit() {
    this.productFilter = this.products;
  }
}
