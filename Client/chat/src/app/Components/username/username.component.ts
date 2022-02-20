import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usernname',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent {
  @Output() userNameEvent = new EventEmitter<string>();

  userName = '';

  constructor() { }

  setUserName(): void {
    this.userNameEvent.emit(this.userName);
  }

}