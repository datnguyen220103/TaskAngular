import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-createtask',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './createtask.component.html',
  styleUrl: './createtask.component.scss'
})
export class CreatetaskComponent {
  createF: FormGroup = new FormGroup({
    name: new FormControl('',Validators.required),
    group: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    priority: new FormControl('', Validators.required),
    duedate: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    createdate: new FormControl(new Date().toISOString().split('T')[0], Validators.required) 
  })
  todoList:Array<any>= []
  onSubmit(){
    console.log(this.createF.valid)
    this.todoList.push(this.createF.value)
    console.log(this.createF.value)
  }
}