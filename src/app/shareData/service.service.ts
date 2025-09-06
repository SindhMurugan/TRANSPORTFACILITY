import { Injectable } from '@angular/core';
import { RideDataModel } from '../data-model.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }


  get getValueFromLocalStorage():[]{
    return JSON.parse(localStorage.getItem("store_rides")!)||[]
  }


  setValueToLocalStorage(args:RideDataModel[]):void{
    localStorage.setItem("store_rides" , JSON.stringify(args))
  }



}
