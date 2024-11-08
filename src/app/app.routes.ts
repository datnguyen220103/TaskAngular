import { Routes} from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { TasklistComponent } from './todoApp/tasklist/tasklist.component';
import { EdittaskComponent } from './todoApp/edittask/edittask.component';
import { CreatetaskComponent } from './todoApp/createtask/createtask.component';


export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tasklist', component: TasklistComponent},
    {path: 'create', component: CreatetaskComponent},
    {path: 'edit', component: EdittaskComponent}
];
