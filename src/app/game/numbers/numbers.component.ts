import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  @Input() selectedNumbers
  @Input() usedNumbers

  @Output() selectNumber = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  numberClassName(number){
    if(this.usedNumbers.indexOf(number) >= 0){
      return 'number--state-used'
    } 
    if(this.selectedNumbers.indexOf(number) >= 0){
      return 'number--state-selected'
    }
  }

  arrayOfNumbers = [1,2,3,4,5,6,7,8,9]

}
