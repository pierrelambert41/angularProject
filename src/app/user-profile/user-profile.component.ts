import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user = {
    name: 'Lambert',
    firstname: 'Pierre',
    age: 25,
    quote: '',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  disable: boolean = false;

  onClick() {
    if (this.disable) {
      this.disable = false
    } else {
      this.disable = true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
