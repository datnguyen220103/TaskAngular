import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../service/app.service';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [AppService],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss',
})
export class TasklistComponent implements OnInit {
  tasks: any;
  constructor(private app: AppService) {}
  ngOnInit(): void {
    this.app.tasks().subscribe({
      next: (res: any) => {
        this.tasks = res;
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }
}
// }
// todolist:Array<any> = [
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
//   {name: 'làm toán', group: 'bài tập',status: false, priority: 1, duedate: "22/12/2024", description: ' làm ngay và luôn',  createdate: "4/11/2024"},
// ]
