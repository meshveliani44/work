import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Idetails, personData } from '../home/person.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {
@Input() useraddress: Idetails
  constructor() { 
this.useraddress = {
  street: "Norberto Crossing",
  suite: "Apt. 950",
  city: "South Christy",
  zipcode: 23505-1337,
}

  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
