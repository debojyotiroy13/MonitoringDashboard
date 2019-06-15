import {Component} from '@angular/core';
import {RestService} from '../../app.service';
import {Observable, throwError, interval } from 'rxjs';
import {HttpClient, HttpHeaders } from "@angular/common/http";
import {MatSnackBar} from '@angular/material';
import {MatTableDataSource, PageEvent} from '@angular/material';
import {NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import {Router } from '@angular/router';
import {AuthService } from 'src/app/services/auth.service';

export interface PeriodicElement {
  id: number,
  name: string;
  description: String;
  price: number;
  category: string;
}

@Component({
  selector: 'product-root',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})


export class ListComponent {
  title = 'Catalog';

  constructor(private restService: RestService, private snackBar: MatSnackBar, 
    private router: Router,private authService: AuthService){
    console.log(this.authService.getUserInfo());
    this.refreshData();
    this.refreshData2();
  }

  public chartType: string = 'line';

  // public chartDatasets: Array<any> = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sensor 1' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Sensor 2' },
  //   { data: [28, 20, 49, 50, 65, 75 , 90], label: 'Sensor 3' }
  // ];

  public chartDatasets: Array<any> = [
    { data: [10], label: 'Used' }
  ];

  public chartDatasets2: Array<any> = [
    { data: [10], label: 'Total' }
  ];

  public chartLabels: Array<any> = ['0'];

  public chartLabels2: Array<any> = ['0'];

  public refreshData2(): void{
    const secondsCounter2 = interval(2000);
    secondsCounter2.subscribe(n =>{
      if(n==0){
        this.chartDatasets2 = [
          { data: [70000000], label: 'Total' },
        ];
        this.chartLabels2 = ['0']
      }else{
        let temp = this.chartDatasets[0].data;
        temp.push(window.performance.memory.totalJSHeapSize); //memory.totalJSHeapSize
        this.chartDatasets2 = [{ data: temp, label: 'Total' }];
        let temp2 = this.chartLabels;
        temp2.push(n.toString());
        this.chartLabels2 = temp2;
      }
    }); 
  }

  public refreshData(): void{
    const secondsCounter = interval(4000);
    secondsCounter.subscribe(n =>{
      if(n==0){
        this.chartDatasets = [
          { data: [70000000], label: 'Used' },
        ];
        this.chartLabels = ['0']
      }else{
        let temp1 = this.chartDatasets[0].data;
        temp1.push(window.performance.memory.usedJSHeapSize); //memory.usedJSHeapSize
        this.chartDatasets = [{ data: temp1, label: 'Used' }];
        let temp3 = this.chartLabels;
        temp3.push(n.toString());
        this.chartLabels = temp3;
      }
    }); 
  }

  

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { console.log(e);}
  public chartHovered(e: any): void { console.log(e);}

}