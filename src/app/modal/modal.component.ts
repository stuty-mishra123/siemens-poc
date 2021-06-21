import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Output() delItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  delete(delete_radio){
    this.delItemEvent.emit(delete_radio);
  }
}
