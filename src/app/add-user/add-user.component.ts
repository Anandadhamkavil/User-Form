import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MyUser } from '../models/myUser';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent  {

  user:MyUser = {} as MyUser
  contactName:string=''
  userForm = this.fb.group({
    id:['',[Validators.required,Validators.pattern('[0-9]')]],
    name:['',[Validators.required]],
    Dob:['',[Validators.required]],
    email:['',[Validators.required,Validators.pattern('[0-9@.a-z]+$')]],
    salary:['',[Validators.required]],
    gender:['',[Validators.required]]
  })
  constructor( private api:ApiService,private router:Router,private fb:FormBuilder)  { }

  adduser(){
    if(this.userForm.valid){
      let id = this.userForm.value.id
      let name = this.userForm.value.name
      let Dob = this.userForm.value.Dob
      let email = this.userForm.value.email
      let salary = this.userForm.value.salary
      let gender = this.userForm.value.gender
    this.api.addUser(this.user)
    .subscribe((data:any)=>{
      console.log(data)
    })
  }
  else{
    alert('Invalid Form')
  }
  }
}
