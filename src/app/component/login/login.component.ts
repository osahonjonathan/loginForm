import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string = '';
  error: boolean = false;
  password: string = '';
  userdetail:any | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.userdetail = JSON.parse(localStorage.getItem('id') as string);
  }

  login(formValue:NgForm){
    
    if (this.username === this.userdetail?.firstname && this.password===this.userdetail?.password) {
      console.log('thats nice')
      this.router.navigate(['/details'])

    }else {
      console.log('ooops')
      this.error = true;
    }
    

  }

}
