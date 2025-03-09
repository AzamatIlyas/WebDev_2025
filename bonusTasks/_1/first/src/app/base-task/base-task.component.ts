import { Component, inject } from '@angular/core';
import {TaskItemComponent} from '../task-item/task-item.component';
import { CommonModule} from '@angular/common';
import {Task} from '../task';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ListOfTasksService} from '../list-of-tasks.service';

@Component({
  selector: 'app-base-task',
  imports: [
    TaskItemComponent, CommonModule, FormsModule
  ],
  templateUrl: './base-task.component.html',
  styleUrl: './base-task.component.css'
})
export class BaseTaskComponent {

  taskService: ListOfTasksService = inject(ListOfTasksService);

  index = 2;
  categoryList: string[] = ["work", "study", "personal"];

  taskList: Task[] = [];
  filteredTaskList: Task[] = [];

  constructor() {
    this.taskList = this.taskService.getAllProducts();
    this.filteredTaskList = this.taskList;
  }

  selectedCategory = "";
  title = "";
  description = "";
  deadline = "";


  addTask() {
    this.taskList.push({
      id: this.index,
      name: this.title,
      description: this.description,
      status: false,
      category: this.selectedCategory,
      deadline: this.deadline,
    });
    this.index++;
    this.selectedCategory = "";
    this.title = "";
    this.description = "";
    this.deadline = "";
  }

  filterTaskWork(){
    this.filteredTaskList = this.taskList.filter((task: Task) => task.category === "work");
  }
  filterTaskStudy(){
    this.filteredTaskList = this.taskList.filter((task: Task) => task.category === "study");
  }
  filterTaskPersonal(){
    this.filteredTaskList = this.taskList.filter((task: Task) => task.category === "personal");
  }
  allTasks(){
    this.filteredTaskList = this.taskList;
  }


  removeTask(item: Task) {
    this.taskList.splice(this.taskList.indexOf(item), 1);
  }

}
