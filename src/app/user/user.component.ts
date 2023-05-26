import { Component, OnInit } from '@angular/core';
import { MyUser } from '../models/myUser';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  alluser:MyUser[]=[]
  searchKey:string=''
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getalluser()
  }

  getalluser(){
    this.api.getalluser()
    .subscribe((data:any)=>{
      console.log(data)
      this.alluser =  data
    })
  }

  search(event:any){
    console.log(event.target.value)
    this.searchKey = event.target.value
  }

  deleteUser(userId:any){
    this.api.deleteUser(userId)
    .subscribe((data:any)=>{
      this.getalluser()
    })
  }
}
