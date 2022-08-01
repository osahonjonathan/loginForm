import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  

  _subscriptions: Subscription[] = [];
  result:any | undefined;
  amount = {};


  



  constructor(private user:UserService) { }

  ngOnInit(): void {

    this.getData();

  }




  getData(){
    this._subscriptions.push(this.user.getData(this.amount).subscribe((res: any) => {
      console.log(res);
      this.result = res;
    }));



  }









}


