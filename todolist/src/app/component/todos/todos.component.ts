import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.css"]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: "Item one",
        completed: false
      },
      {
        id: 2,
        title: "Item f",
        completed: false
      },
      {
        id: 3,
        title: "Item x",
        completed: true
      },
      {
        id: 4,
        title: "Item d",
        completed: false
      }
    ];
  }
}
