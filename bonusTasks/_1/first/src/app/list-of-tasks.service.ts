import { Injectable } from '@angular/core';
import {Task} from './task';

@Injectable({
  providedIn: 'root'
})
export class ListOfTasksService {

  protected taskList: Task[] = [
    {
      id: 1,
      name: "example",
      description: "lalala",
      status: false,
      category: "study",
      deadline: "15-00",
    },
  ]

  getAllProducts(): Task[] {
    return this.taskList;
  }

  getProductById(id:number): Task | undefined{
    return this.taskList.find((task) => task.id === id);
  }

  constructor() { }
}
