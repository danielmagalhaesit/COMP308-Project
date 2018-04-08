import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  _message: String;

  constructor() { }

  ngOnInit() {

  }

}
