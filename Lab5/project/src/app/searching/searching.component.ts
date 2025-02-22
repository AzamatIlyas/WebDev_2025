import { Component, inject } from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {Products} from '../products';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ProductListService} from '../product-list.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-searching',
  imports: [
    ProductComponent, CommonModule, FormsModule, RouterLink
  ],
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.css'
})

export class SearchingComponent {

  productService: ProductListService = inject(ProductListService);
  selectedCategory = 'All';
  categories = ['All', 'Technique', 'Clothes', 'Instruments', 'Sport'];
  productList: Products[] = [];
  filteredItems: Products[] = [];

  likedItems: Products[] = [];

  constructor() {
    this.productList = this.productService.getAllProducts();
    this.filteredItems = this.productList;
  }

  getLikedItems() {
    for (let i = 0; i < this.productList.length; i++) {
      if(this.productList[i].like){
        this.likedItems.push(this.productList[i]);
      }
    }
    return this.likedItems;
  }

  filterBySearch(text: string){
    if(!text){
      this.filterByCategory();
      return
    }
    this.filteredItems = this.filteredItems.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
  }

  filterByCategory(){
    if(this.selectedCategory === 'All'){
      this.filteredItems = this.productList.filter(item => item.state);
      return;
    }
    this.filteredItems = this.productList.filter(product => product.category === this.selectedCategory && product.state);
  }

  deleteItem(item: Products){
    this.productList = this.productList.filter(item => item.state);
    this.filterByCategory();
  }

}
