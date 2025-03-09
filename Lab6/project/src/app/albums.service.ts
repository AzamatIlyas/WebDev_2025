import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  url = 'http://localhost:3000/albums';

  constructor() { }
}
