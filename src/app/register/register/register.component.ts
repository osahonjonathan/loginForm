import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // key: string = 'logindetails';
  userdetail: any | undefined;
  firstname: string = '';
  email: string = '';
  password: string = '';
  phonenumber: number | undefined;
  Profession: string = '';
  logindetails: string = 'id';
  

  constructor() { }

  ngOnInit(): void {


  }

  register(formValue:NgForm){
    console.log(formValue.value);
    localStorage.setItem(this.logindetails, JSON.stringify(formValue.value));
    this.userdetail = localStorage.getItem(this.logindetails);
    // let{firstname,email,password,phonenumber,profession}=JSON.parse(localStorage.getItem(formValue.value));

  }

}
