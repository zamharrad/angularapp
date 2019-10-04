import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User = {
    firstName : '',
    lastName : '',
    email :'',
  }
  users : User [];
  showExtended :boolean = true;
  enableAdd :boolean = false;
  currentClasses = {}
  currentStyle ={};
  hide:true
  showUserForm:boolean = false
  
  constructor() { }

  ngOnInit() {
    this.users = [{
      firstName : 'Zamhar',
      lastName :'Raad',
      //age :23,
      email: 'zamhar@SpeechGrammarList.com',
      //image : 'http://lorempixel.com/500/500/pepole/3',
      isActive :true,
      hide :true
      
    },
    {
      firstName : 'Johan',
      lastName :'Lee',
      email:'johan@yahoo.com',
     // image : 'http://lorempixel.com/500/500/pepole/2',
      isActive:false,
      hide:true
    },
    {
      firstName : 'Buddy',
      lastName :'Boy',
      email:'buddy@outlook.com',
    //  image : 'http://lorempixel.com/500/500/pepole/1',
      isActive:false,
      hide:true
    }];

    // this.addUser({
    //   firstName : 'Jimy',
    //   lastName :'Nisham',
    //   age :33,
    //   address :{
    //       no : '58',
    //       street :'Duble street',
    //       city : 'Sri Lanka'
    //   },
    //  // image : 'http://lorempixel.com/500/500/pepole/4'
    //   hide:true
    // })

  }
  // addUser(){
  //   this.users.unshift(this.user);
  //   this.user ={
  //       firstName : '',
  //       lastName :'',
  //       age :null,
  //       address :{
  //           no : '',
  //           street :'',
  //           city : ''
  //       }
    
  //   }
  // }
  setCurrentClass(){
    this.currentClasses ={
      'btn-success' : this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyle(){
    this.currentStyle = {
      'padding-top' : this.showExtended ? '0' : '40px'
    }
  }

  fireEvent(e){
    // console.log("button Clicked")
    console.log(e);
  }


  toggleHide(user:User){
    user.hide = !user.hide;
  }

  onSubmit(){

  }
//   this.addUser({firstName : 'Buddy',
//   lastName :'Boy',
//   age :33,
//   address :{
//       no : '45A',
//       street :'main street',
//       city : 'Colombo 8'
//   }
// });

 


}