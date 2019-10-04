import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user :User;

  constructor() { }

  ngOnInit() {

    this.user ={
      firstName : 'Zamhar',
      lastName :'Raad',
      // age :23,
      // address :{
      //     no : '45A',
      //     street :'main street',
      //     city : 'Colombo'
      // }
    }


  }

}
