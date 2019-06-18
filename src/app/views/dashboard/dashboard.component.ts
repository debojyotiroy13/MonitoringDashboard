import {Component} from '@angular/core';
import {RestService} from '../../services/app.service';
import {interval } from 'rxjs';
import {MatSnackBar} from '@angular/material';
import {Router } from '@angular/router';
import {AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent {
  title = 'Catalog';

  constructor(private restService: RestService, private snackBar: MatSnackBar, 
    private router: Router,private authService: AuthService){
    this.lineChartRefreshData();
    this.pieChartRefreshData();
    this.barChartRefreshData();
  }
  public arr = [1,2,3,4];
  public arr1 = [1,2,3];
  public lineChartType: string = 'line';
  public pieChartType: string = 'pie';
  public barChartType: string = 'bar';

  public chartDatasets: Array<any> = [
    { data: [], label: 'MB' }
  ];
  public chartDatasets2: Array<any> = [
    { data: [], label: 'MB' }
  ];
  public barChartDatasets: Array<any> = [
    { data: [], label: 'MB' }
  ];
  

  public chartLabels: Array<any> = ['Used Memory', 'Unused Memory'];
  public chartLabels2: Array<any> = [];
  public barChartLabels: Array<any> = [];
  public maxLineGraphPoints = 10;
  public maxBarGraphPoints = 20;
  
  public lineChartRefreshData(): void{
    const secondsCounter2 = interval(2000);
    secondsCounter2.subscribe(n =>{
        let tempData = this.chartDatasets2[0].data;
        let obj : any = window.performance;
        tempData.push(obj.memory.totalJSHeapSize/1000000);
        if(n > this.maxLineGraphPoints){tempData.shift();}
        this.chartDatasets2 = [{ data: tempData, label: 'MB' }];
        let tempLabels = this.chartLabels2;
        var time = new Date();
        var timeString = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        tempLabels.push(timeString);
        if(n > this.maxLineGraphPoints){tempLabels.shift();}
        this.chartLabels2 = tempLabels;
    }); 
  }

  public barChartRefreshData(): void{
    const secondsCounter2 = interval(2000);
    secondsCounter2.subscribe(n =>{
        let tempData2 = this.barChartDatasets[0].data;
        let obj : any = window.performance;
        tempData2.push(obj.memory.totalJSHeapSize/1000000);
        if(n > this.maxBarGraphPoints){tempData2.shift();}
        this.barChartDatasets = [{ data: tempData2, label: 'MB' }];
        let tempLabels2 = this.barChartLabels;
        var time = new Date();
        var timeString = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        tempLabels2.push(timeString);
        if(n > this.maxBarGraphPoints){tempLabels2.shift();}
        this.barChartLabels = tempLabels2;
    }); 
  }

  public pieChartRefreshData(): void{
    const secondsCounter = interval(5000);
    secondsCounter.subscribe(n =>{
        let tempData1 = [];
        let obj : any = window.performance;
        tempData1.push(obj.memory.usedJSHeapSize);
        tempData1.push(obj.memory.totalJSHeapSize - obj.memory.usedJSHeapSize);
        this.chartDatasets = [{ data: tempData1, label: 'Total' }];
    }); 
  }

  public chartColorsPie: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartColorsLine: Array<any> = [
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
  public chartClicked(e: any): void { 
    //console.log(e);
  }
  public chartHovered(e: any): void { 
    //console.log(e);
  }

}