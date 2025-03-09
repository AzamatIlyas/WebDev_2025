import {Routes} from "@angular/router";
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {AlbumsComponent} from './albums/albums.component';

const routeConfig: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
  },
  {
    path: 'albums',
    component: AlbumsComponent,
    title: 'Albums',
  },
]

export default routeConfig;
