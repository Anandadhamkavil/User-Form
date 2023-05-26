import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(alluser:any [], searchKey:string,propName:string): any [] {
    const result:any = []
    if(!alluser || searchKey=='' || propName==''){
      return alluser
    }
    alluser.forEach((user:any)=>{
     if(user[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
      result.push(user)
     }
    }) 
    return result ;
  }

}
