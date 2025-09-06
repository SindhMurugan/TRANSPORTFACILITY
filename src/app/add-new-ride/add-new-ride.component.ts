import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RideDataModel } from '../data-model.interface';
import { ServiceService } from '../shareData/service.service';

@Component({
  selector: 'app-add-new-ride',
  templateUrl: './add-new-ride.component.html',
  styleUrls: ['./add-new-ride.component.css']
})
export class AddNewRideComponent {

  addNewRideForm:FormGroup
  newRide:Record<string,string> ={}
  restoreRideDataFromStorage:RideDataModel[] = new Array()

  constructor(private fb:FormBuilder,private service:ServiceService) { 
    this.addNewRideForm=this.fb.group({
      employee_id:['',Validators.required],
      vehicle_type:[''],
      vehicle_No:['',Validators.required],
      vacant_Seat:['',Validators.required],
      time:['',Validators.required],
      pickup_Point:['',Validators.required],
      destination:['',Validators.required],


    })
  }



  get getFormControls(){
    return this.addNewRideForm.controls;
  }


  addedNewRide(){
    const active_employeeId = this.addNewRideForm.get('employee_id')?.value
    const checkEmployeeId = this.service.getValueFromLocalStorage.some((ride:RideDataModel) => ride.employee_id == active_employeeId )
    if(checkEmployeeId){
      alert("This employee id is already exits")
      return 
    }
     
  
    this.newRide = this.addNewRideForm.value 
    this.addNewRideForm.reset()
    console.log(this.addNewRideForm.value , 'mmmm')

  }

}
