import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-studets',
  templateUrl: './list-studets.component.html',
  styleUrls: ['./list-studets.component.css']
})
export class ListStudetsComponent {
  STUDENTS = [ 
    { name: 'Maria', lastName:'Asia' , age: '21', document: '123456789', commission: '100', advance: 10},
    { name: 'José', lastName:'Africa', age: '22', document: '123456789', commission: '200', advance: 50},
    { name: 'Pedro', lastName:'Venezuela', age: '23', document: '123456789', commission: '300', advance: 100},
  ]
}