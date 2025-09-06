import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ServiceService } from '../shareData/service.service';
import { RideDataModel } from '../data-model.interface';

@Component({
  selector: 'app-ride-list',
  templateUrl: './ride-list.component.html',
  styleUrls: ['./ride-list.component.css'],
 
})
export class RideListComponent implements OnChanges,OnInit {

  @Input() newRideData:Record<string,string> ={}
  restoreRideDataFromStorage:RideDataModel[] = new Array()
  current_time = new Date().getTime()
  userInput:string=''
  activeUser:number = 0

  constructor(private service:ServiceService) { }

  ngOnChanges(changes:any): void {

    if(changes.newRideData.previousValue){
      let  existingData:any = this.service.getValueFromLocalStorage
      existingData.push(changes.newRideData.currentValue)
      this.activeUser = changes.newRideData.currentValue.employee_id
      this.service.setValueToLocalStorage(existingData)
    }
    this.restoreRideDataFromStorage= this.service.getValueFromLocalStorage
    console.log(this.current_time , 'ccurrent_time')
    
    
  }

  ngOnInit(): void {
    this.restoreRideDataFromStorage= this.service.getValueFromLocalStorage
  }

  trackById(index:number , item:any){
    return item.id

  }
  


  rideBooked(rideDetails:RideDataModel):void{
    if(rideDetails.employee_id == this.activeUser){
      alert("Sorry , you can't book the ride twise")
    }

    if(rideDetails['vacant_Seat'] > 0){
      let bookedRide:RideDataModel = {...rideDetails , vacant_Seat:rideDetails['vacant_Seat']-1  }
      console.log(bookedRide,'bookedRide')

      this.restoreRideDataFromStorage.forEach((ride)=> {
        if(ride.employee_id == rideDetails.employee_id){
          let index = this.restoreRideDataFromStorage.indexOf(ride)
          console.log(999 , index)
          this.restoreRideDataFromStorage.splice(index , 1)
          console.log("8888" , this.restoreRideDataFromStorage)
        }
      })

      this.restoreRideDataFromStorage.push(bookedRide)
     
      
      this.service.setValueToLocalStorage(this.restoreRideDataFromStorage)
      this.restoreRideDataFromStorage= this.service.getValueFromLocalStorage
    }
   
    

  }

}
