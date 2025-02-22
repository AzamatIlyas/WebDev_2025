import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Products} from '../products';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [
    RouterLink
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input() product!: Products;
  @Output() deleteItem = new EventEmitter<Products>();
  currentImageIndex = 0;

  nextImage() {
    if (this.product.image.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.image.length;
    }
  }

  prevImage() {
    if (this.product.image.length > 1) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.image.length) % this.product.image.length;
    }
  }

  deletingElement(){
    const confirmState = window.confirm("Are you sure?");

    if(confirmState){
      this.product.state = false;
      this.deleteItem.emit(this.product);
    }
  }

}
