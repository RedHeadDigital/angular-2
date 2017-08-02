import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() status;

  @Output() updateStatus = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
