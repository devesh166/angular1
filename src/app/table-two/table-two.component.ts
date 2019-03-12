import { Component, OnInit, NgModule } from '@angular/core';
import { JsonDataService } from '../json-data.service';
import { FormsModule } from '@angular/forms'; 
import { TableOneComponent } from '../table-one/table-one.component';

@NgModule({
  imports: [
     FormsModule

  ]
  })
@Component({
  selector: 'app-table-two',
  templateUrl: './table-two.component.html',
  styleUrls: ['./table-two.component.css']
})
export class TableTwoComponent implements OnInit {
  public thead: string[] ;
  public data: any;
  public in:string[];
  public name0: string;
  public name1: string;
  public name2: string;
  public name3: string;
 // public obj :any;
 
  constructor( private myservice: JsonDataService) {
    
   }


 
  ngOnInit() {
    //this.location.reload();
    this.data = this.myservice.getdata();
   
    
  }
  takeinput(i){
    //this.in[i] =this.name;
    //; 
   }
    putData(){
       document.getElementById("tablebody").style.display="block";
       document.getElementById("ok").style.display="inline-block";
       document.getElementById("cancel").style.display="inline-block";
       
      this.thead = Object.keys(this.data[0]);
      
    }
    value;
    submitData(){
        let obj = {
         "userId": parseInt(this.name0)
          ,
        "id": parseInt(this.name1),
        "title": this.name2,
        "body":this.name3
      }
      
     
     // console.log(load.data)
     // load.ngOnInit();
     // load.sortData("id");

     this.value=this.myservice.getdata();
     this.value.push(obj);
     //console.log(this.value);
     this.omitData();
      //return this.myservice.data.push(obj);

      //console.log(this.myservice.data);

    }
    omitData(){
      this.name0="";
      this.name1="";
      this.name2="";
      this.name3="";

    }
    
    
}
