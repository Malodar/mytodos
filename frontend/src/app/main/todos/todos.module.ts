import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { RouterModule } from '@angular/router';
import { TodoService } from '../todo/todo.service';
import { FuseSidebarModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { MatSelectModule } from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { TodoMainSidebarComponent } from './sidebars/main/main-sidebar.component';
import { TodoListItemComponent } from './todo-list/todo-list-item/todo-list-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';

const routes = [
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path     : 'all',
    component: TodosComponent,
    resolve  : {
        todo: TodoService
    }
  },
  {
      path     : 'all/:todoId',
      component: TodosComponent,
      resolve  : {
          todo: TodoService
      }
  },
  {
      path     : 'tag/:tagHandle',
      component: TodosComponent,
      resolve  : {
          todo: TodoService
      }
  },
  {
      path     : 'tag/:tagHandle/:todoId',
      component: TodosComponent,
      resolve  : {
          todo: TodoService
      }
  },
  {
      path     : 'filter/:filterHandle',
      component: TodosComponent,
      resolve  : {
          todo: TodoService
      }
  },
  {
      path     : 'filter/:filterHandle/:todoId',
      component: TodosComponent,
      resolve  : {
          todo: TodoService
      }
  },
  // {
  //     path      : '**',
  //     redirectTo: 'all'
  // }
  ];

@NgModule({
  declarations: [
    TodosComponent,
    TodoMainSidebarComponent,
    TodoListItemComponent,
    TodoListComponent,
    TodoDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    MatButtonModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatMenuModule,
    MatRippleModule,
    MatSelectModule,

    NgxDnDModule,

    FuseSharedModule,
    FuseSidebarModule
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
