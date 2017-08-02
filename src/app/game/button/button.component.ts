import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Input() answerIsCorrect
    @Input() selectedNumbers
    @Input() redraws

    @Output() checkAnswer = new EventEmitter()
    @Output() acceptAnswer = new EventEmitter()
    @Output() redraw = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

}
