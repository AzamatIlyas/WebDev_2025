import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { SearchingComponent } from './searching/searching.component'
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Online Market';
}
