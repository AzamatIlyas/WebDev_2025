import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchingComponent } from './searching/searching.component'

@Component({
  selector: 'app-root',
  imports: [SearchingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Online Market';
}
