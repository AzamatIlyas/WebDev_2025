import {Routes} from "@angular/router";
import {BaseTaskComponent} from './base-task/base-task.component';
import {TaskDetailComponent} from './task-detail/task-detail.component';


const routeConfig: Routes = [
  {
    path: '',
    component: BaseTaskComponent,
    title: 'Home',
  },
  {
    path: 'task/:id',
    component: TaskDetailComponent,
    title: 'Task',
  },
]

export default routeConfig;
