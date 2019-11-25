import {Injectable} from '@angular/core';
import {ProductInterface} from '../ProductInterface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
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

  getAll(): ProductInterface[] {
    return this.products;
  }

  create(product: ProductInterface) {
    this.products.push(product);
  }

  delete(id) {
    this.products.splice(id, 1);
  }

  findById(id: number): ProductInterface {
    return this.products[id];
  }

  update(product: ProductInterface, index: number) {
    this.products[index] = product;
  }
}
