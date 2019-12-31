import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }
  user = {
    username: '',
    password: ''
  }
  bool = true;
  sendForm(valid){
    console.log(this.user.username)
    console.log(valid);

  }
  ngOnInit() {
  }

}
