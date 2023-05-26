import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyUser } from 'src/app/models/myUser'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = 'http://localhost:3000/user'
  constructor(private http:HttpClient) { }

   //function  for get allusers
   getalluser():Observable<MyUser>{
    return this.http.get(this.baseUrl)

  }
  // function for view a particular user
  viewUser(userId:string){
    return this.http.get(`${this.baseUrl}/${userId}`)
   }
   // function for adding new user to server
  addUser(userBody:any){
    return this.http.post(this.baseUrl,userBody)
  }

  // function for deleting a user
  deleteUser(userId:any){
   return this.http.delete(`${this.baseUrl}/${userId}`)
  }

   // update user detail according to user select  
   updateUser(userId:any,userBody:any){
     return this.http.put(`${this.baseUrl}/${userId}`,userBody)
  }
}
