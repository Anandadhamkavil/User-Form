import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array:any[]): any[] {
    return array.sort((a,b)=>{
      const dataA = new Date(a.Dob)
      const dataB = new Date(b.Dob)
      return dataA.getTime()- dataB.getTime()
    })
  }

}
