import {Component, inject, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';
import {Products} from '../products';
import {ProductListService} from '../product-list.service';
import {ProductComponent} from '../product/product.component';

@Component({
  selector: 'app-basket',
  imports: [
    FormsModule,
    NgForOf,
    ProductComponent
  ],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})

export class BasketComponent {
  productList: Products[] = [];
  productService: ProductListService = inject(ProductListService)
  filteredItems: Products[] = [];

  constructor() {
    this.productList = this.productService.getAllProducts();
    this.filteredItems = this.productList.filter((item) => item.like);
  }

  filterByLike():Products[] {
    return this.filteredItems = this.productList.filter((item) => item.like);
  }

}
