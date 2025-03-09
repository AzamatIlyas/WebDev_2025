import {Component, Input} from '@angular/core';
import {Task} from '../task';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-task-item',
  imports: [
    RouterLink
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;

  taskDone() {
    this.task.status = !this.task.status;
  }

}
