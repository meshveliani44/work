import { Component, OnInit } from '@angular/core';
import { personData,  } from './person.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
student: personData ;
setUserName: string = ''
  constructor() {
    this.student = {
      name: "Dennis Schulist",
    isStudent: false,
    email: "Karley_Dach@jasper.info",
    address: {
      street: "Norberto Crossing",
      suite: "Apt. 950",
      city: "South Christy",
      zipcode: 23505-1337,
    },

    }
   }

  ngOnInit(): void {
    console.log('component initialized')
  }
studentStatus(student: personData){
  if(student.isStudent){
    console.log('is a student')
  } else{
    console.log('not a student')
  }
}

setName(name: string){
  this.student.name = name
}

}
