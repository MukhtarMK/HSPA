import { Component, OnInit } from '@angular/core';
import { PropertyCardComponent } from "../property/property-card/property-card.component";
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-property-List',
  templateUrl: './property-List.component.html',
  styleUrls: ['./property-List.component.css'],
  imports: [PropertyCardComponent,NgFor,CommonModule]
})
export class PropertyListComponent implements OnInit {
  Properties:Array<any>=[
    {
      "id":1,
      "Type":"House",
      "Name":"Mukhtar House",
      "price":12000
    },
    {
      "id":2,
      "Type":"House3",
      "Name":"Mukhtar House2",
      "price":13000
    },
    {
      "id":3,
      "Type":"House3",
      "Name":"Mukhtar House3",
      "price":18000
    },
]
  constructor() { }

  ngOnInit() {
  }

}
