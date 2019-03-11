import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';

@Component({
  selector: 'app-table-one',
  templateUrl: './table-one.component.html',
  styleUrls: ['./table-one.component.css']
})
export class TableOneComponent implements OnInit {

  public thead: string[] ;
  public data: any;
  public tableData :any[];
  public flag2:boolean =true;
  public temp :number;
  public str:string="id";
  constructor() { }

  ngOnInit() {
    
    var json = new JsonDataService();
     this.data =json.fetchData();
   // console.log(data);
  
    this.thead = Object.keys(this.data[0])



  }
  getData(i: number){

     
    this.tableData =Object.values(this.data[i])

    //console.log(this.tableData[i])
   }

   sortData(params) {
   //let params:any ="title";
  // if(typeof(params)
    if (this.flag2) {
        this.data.sort(function (a, b) {
            var textA = a[params] ;
            var textB = b[params];
            if (textA < textB)
                return -1;
            if (textA > textB)
                return 1;

            return 0;
        })
        this.flag2 = false;
    } else {
      this.data.sort(function (a, b) {
            var textA = a[params];
            var textB = b[params];
            if (textA < textB)
                return 1
            if (textA > textB)
                return -1
            return 0;
        })
        this.flag2 = true;
    }
    //console.log(params)
   //console.log(this.data)
     
}

}