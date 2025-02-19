import { Component } from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {Products} from '../products';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-searching',
  imports: [
    ProductComponent, CommonModule
  ],
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.css'
})
export class SearchingComponent {
  productList: Products[] = [
    {
      image: ['https://avatars.mds.yandex.net/i?id=f667f1b808231f01a11259703c7da51b45416164-5449367-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=27fcb28aed2d958691eee7e14b2980dd64164d8e-12569757-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=68b2ac500de835baab5eeffc0c56c82dea265461-5479412-images-thumbs&n=13'],
      name: 'Iphone 16',
      description: 'Product of company Apple',
      rating: 4.5,
      url: 'https://kaspi.kz/shop/search/?text=iphone%2016&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=be662b0dae06c8c600e7978cd5e331636fd5bf80-12569860-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=c3673c875637521301b1e3597ad8502ea3b1d8ae-10926796-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=ecdd47667d172c90629cca79f767bb53282d1041-5387132-images-thumbs&n=13'],
      name: 'Nike Air Dunk x Dior',
      description: 'Very comfortable sneakers',
      rating: 4,
      url: 'https://kaspi.kz/shop/search/?text=nike%20dior&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=3df43405eab066b1887e34f5cd7380db1b30521e-9233261-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=721f3ede2e9df6f713cd905c3e7ab9135771d131-6235668-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=adfa082fc518d2af0dc908e1112962d051d14d62-10595999-images-thumbs&n=13'],
      name: 'Acer Nitro 5',
      description: 'Laptop',
      rating: 3.5,
      url: 'https://kaspi.kz/shop/search/?text=nitro%205&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=b25d9c707757631e860d2849ebda19eb4145c71f-5254610-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=03a6f6736a8473e5bf99e9ed83dd7c7186a56029-10696063-images-thumbs&n=13',
      'https://avatars.mds.yandex.net/i?id=386ea5542b5df78be4a0efe014b9bca98fa9d59f-12749638-images-thumbs&n=13'],
      name: 'PlayStation 5',
      description: 'Gaming console',
      rating: 3.5,
      url: 'https://kaspi.kz/shop/search/?text=ps%205&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=e5752348ae8072a0f5a4fea23c3d095e76677e16-12537873-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=038516f3e4496268399432fddc5e899cc3f6e163-4865634-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=74b8aa0bc7b4feeefa8e172049de49a70aad86d2-7564157-images-thumbs&n=13'],
      name: 'Taylor',
      description: 'Guitar acoustic',
      rating: 2,
      url: 'https://kaspi.kz/shop/search/?text=guitar&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=7503feac71c578668e0b726bd7250c2b7cd6fbee-12527687-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=2d00a4a0024a39e5829beab12a0fc5b5f95423da5f704998-13212321-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=453fa236363a07621cb11b0bde3cf0dfb304dbc5-12539768-images-thumbs&n=13'],
      name: 'T-shirt',
      description: 'Liverpool T-shirt',
      rating: 5,
      url: 'https://kaspi.kz/shop/search/?text=liverpool%20fc&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=fd93c149b16a30fe9c43a7585d7e758dac5db584-9182238-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=23af1e89dfed258f7a15f4561596e92fc15afff5-12513061-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=23af1e89dfed258f7a15f4561596e92fc15afff5-12513061-images-thumbs&n=13'],
      name: 'Ball',
      description: 'Champions League Ball',
      rating: 4.3,
      url: 'https://kaspi.kz/shop/search/?text=ball%20football&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=05d7452cd24ef290a26aad556fe2c2c42ab590a6-8297859-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=23af1e89dfed258f7a15f4561596e92fc15afff5-12513061-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=0f015549ed29cd1624f6b7dd1fcfa5e52b0ba4db-13223322-images-thumbs&n=13'],
      name: 'Born Qazaq',
      description: 'Sweater',
      rating: 2.9,
      url: 'https://kaspi.kz/shop/search/?text=%D1%81%D0%B2%D0%B8%D1%82%D0%B5%D1%80%D1%8B&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=9ecd5052a268979f0cd4ec709e28daa86e9337d3-7452211-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=06f130d0d04d9d9de0a32b808e0ee7c45381b0d0-8261187-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=8005e8540bcac96c25d0dac54b81fab58d02943b-5211479-images-thumbs&n=13'],
      name: 'Shampoo',
      description: 'Dove',
      rating: 1.8,
      url: 'https://kaspi.kz/shop/search/?text=dove&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    {
      image: ['https://avatars.mds.yandex.net/i?id=b76eca558dfec67cde42c55786989a858063ab2f-8805584-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=95f4256c2cd7cd966ba95b53ff92d74082d040ab-4937949-images-thumbs&n=13',
        'https://avatars.mds.yandex.net/i?id=ea939d1f3f60662abf0521b6dc2acff4-5289075-images-thumbs&n=13'],
      name: 'Rich dad poor dad',
      description: 'Robert Kiyosaki',
      rating: 3.6,
      url: 'https://kaspi.kz/shop/search/?text=Rich%20dad%20poor%20dad&q=%3AavailableInZones%3AMagnum_ZONE1&sort=relevance&filteredByCategory=false&sc=',
    },
    ];

}
