import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { MyUser } from '../models/myUser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  userId:string=''
  user:MyUser = {} as MyUser
  constructor(private api:ApiService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params
    .subscribe((data)=>{
      console.log(data['userId'])
      this.userId = data['userId']
    })

    this.api.viewUser(this.userId)
    .subscribe((data:any)=>{
      this.user = data
    })

    this.api.getalluser()
    .subscribe((data:any)=>{
      console.log(data)
    })
  }

  updateUser(){
    this.api.updateUser(this.userId,this.user)
    .subscribe((data:any)=>{
    })
  }
  
}
