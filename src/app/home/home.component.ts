import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactForm!: FormGroup;
  constructor() {

  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(""),
      email: new FormControl(''),
      age:new FormControl('')
    })

  }




}
