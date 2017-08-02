import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  @Input() selectedNumbers

  @Output() unselectNumber = new EventEmitter()

  constructor() { }

  ngOnInit() {
    
  }

}
