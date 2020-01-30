import { Component, OnInit } from '@angular/core';
import {TASK} from '/home/Amogh/Documents/Training/AJS/assignment/todo-list/src/app/task'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  todo_list:TASK[];
  todoTitle: string;

  constructor() { }

  ngOnInit() {
    this.todo_list=[];
    this.todoTitle='';
  }

}
