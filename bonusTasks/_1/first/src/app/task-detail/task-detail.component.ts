import {Component, inject, Input} from '@angular/core';
import {Task} from '../task';
import {ActivatedRoute} from '@angular/router';
import {ListOfTasksService} from '../list-of-tasks.service';

@Component({
  selector: 'app-task-detail',
  imports: [],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  taskId = -1;
  task: Task | undefined;
  taskService = inject(ListOfTasksService)

  constructor() {
    this.taskId = Number(this.route.snapshot.params['id']);
    this.task = this.taskService.getProductById(this.taskId);
  }

}
