import { Component, OnInit } from '@angular/core';

import {todos} from './../../models/todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

todo:todos[];
inputTodo:string = "";

constructor() {}



ngOnInit(): void{
  this.todo = [
    {
     content: 'First todo',
     completed: false
    },

    {content: 'Second todo',
    completed: false
    }
  ]
}

toggleDone (id:number) {
  this.todo.map((v, i) => {
    if (i == id) v.completed = !v.completed;

    return v;
  })
}

deleteTodo (id:number) {
  this.todo = this.todo.filter((v, i) => i !== id);
}

  addTodo(){
    this.todo.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = ""

  }

  }