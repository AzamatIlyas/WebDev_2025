import {Routes} from "@angular/router";
import {SearchingComponent} from './searching/searching.component';
import {DetailsComponent} from './details/details.component';
import {BasketComponent} from './basket/basket.component';

const routeConfig: Routes = [
  {
    path: '',
    component: SearchingComponent,
    title: 'Home',
  },
  {
    path: 'details/:name',
    component: DetailsComponent,
    title: 'Details',
  },
  {
    path: 'liked-busket',
    component: BasketComponent,
    title: 'Liked busket',
  },
]

export default routeConfig;
