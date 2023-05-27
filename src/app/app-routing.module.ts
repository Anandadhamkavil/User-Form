import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [

  {
    path:'' ,redirectTo:'/user',pathMatch:'full'
  },
  {
    path:'user' , component:UserComponent
  },
  {
    path:'user/adduser' , component:AddUserComponent
  },
  {
    path:'user/edit/:userId' , component:EdituserComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
