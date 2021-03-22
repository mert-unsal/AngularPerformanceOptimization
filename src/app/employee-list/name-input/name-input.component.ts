import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.less']
})
export class NameInputComponent {
  @Output() add = new EventEmitter<String>();
  label:string;

  handleKey(event:any) {
    if(event.keyCode === 13) {
      this.add.emit(this.label);
      this.label = '';
    }
  }
}
