import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , userInput:string):any {

    let convertuserInputToLower = userInput.toLowerCase()
    let filteredValue = value.filter((item:any) => item.vehicle_type?.toLowerCase().includes(convertuserInputToLower))
    return filteredValue
   
  }

}
