import { Component, Input } from '@angular/core';
import {Products} from '../products';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent {
  @Input() products!: Products;
  currentImageIndex = 0;

  shareOnWhatsApp() {
    const url = encodeURIComponent(this.products.url);
    const message = encodeURIComponent(`Check out this product: ${this.products.name} - ${url}`);
    window.open(`https://wa.me/?text=${message}`, '_blank');
  }

  shareOnTelegram() {
    const url = encodeURIComponent(this.products.url);
    const message = encodeURIComponent(`Check out this product: ${this.products.name} - ${url}`);
    window.open(`https://t.me/share/url?url=${url}&text=${message}`, '_blank');
  }

  nextImage() {
    if (this.products.image.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.products.image.length;
    }
  }

  prevImage() {
    if (this.products.image.length > 1) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.products.image.length) % this.products.image.length;
    }
  }

}
