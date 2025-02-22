import {Component, inject} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {ProductComponent} from '../product/product.component';
import {Products} from '../products';
import {ProductListService} from '../product-list.service';

@Component({
  selector: 'app-details',
  imports: [
    NgIf
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productName = "";
  productService = inject(ProductListService);
  product: Products | undefined;
  currentImageIndex = 0;

  constructor() {
    this.productName = this.route.snapshot.params['name'];
    this.product = this.productService.getProductByName(this.productName);
  }

  sendWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent(this.product!.url)}`;
    window.open(url, '_blank');
  }

  sendTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product!.url)}`;
    window.open(url, '_blank');
  }

  nextImage() {
    if (!this.product || !this.product.image || this.product.image.length <= 1) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.image.length;
  }

  prevImage() {
    if (!this.product || !this.product.image || this.product.image.length <= 1) return;
    this.currentImageIndex = (this.currentImageIndex - 1 + this.product.image.length) % this.product.image.length;
  }

  liking(){
    this.product!.like = !this.product?.like;
  }

}
