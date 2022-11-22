import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss']
})
export class NumbersComponent implements OnInit {

  nums: Number[] = [44, 45, 46, 47, 48, 49, 50, 51]
  constructor() {
    
  }

  ngOnInit(): void {
    console.log(this.nums)
  }

}
