import { Injectable } from '@angular/core';
import { TableOneComponent } from './table-one/table-one.component';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService {
  data :any;
  constructor() { 
  

  }
   
  fetchData(){
    let data1 = this.data;

    let ourRequest = new XMLHttpRequest();
      ourRequest.open('GET', 'https://jsonplaceholder.typicode.com/posts', false);
       ourRequest.onload = function () :void{
       data1 = JSON.parse( ourRequest.responseText)
       //console.log(data1)
        }
     ourRequest.send();
     this.data=data1;
     return this.data;
  }
  loadData(obj){
    console.log(this.data)
    
    
    return this.data.push(obj);

    
  }
   
    


}
