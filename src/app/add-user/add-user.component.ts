import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MyUser } from '../models/myUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  user:MyUser = {} as MyUser
  contactName:string=''
  constructor( private api:ApiService,private router:Router)  { }

  adduser(){
    this.api.addUser(this.user)
    .subscribe((data:any)=>{
      console.log(data)
    })
  }
}
