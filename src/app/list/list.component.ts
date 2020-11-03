import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  students = new Array<Student>();

  constructor() { }

  ngOnInit() {
    this.students = [
      new Student("Tounsi", "Ali", "L2DSI2"), 
      new Student("Ben Romdhan", "Sarra", "L2DSI1"), 
      new Student("Ayadi", "Walid", "L2DSI2")
    ];
  }

}
