import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { StopTimerComponent } from './stop-timer/stop-timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timely';
  
  public currentRow = [];
  public projectName; 
  public click = false; //izmjenjuje se kako se pritišće start i stop 
  public stopTimerClicked = false; //Prati jel se timer zatvorio(nakon što je bio otvoren)
  public startTime;
  public stopTime;
  public duration;

  constructor(public dialog: MatDialog) {
    
  }

  openDialog():void {
    let dialogRef = this.dialog.open(StopTimerComponent, {
      width: '250px',
      /*data: {projectName: this.projectName,
             stopTimerClicked: this.stopTimerClicked
      }*/
    })
    dialogRef.afterClosed().subscribe(result => {
      this.projectName = result;
      this.stopTimerClicked = true;
    }); 
    
  }

  startClicked():void {
      this.click = true;
      let time = new Date();
      
      this.startTime = time.toLocaleString();

      let obj = this.createObject([this.startTime, '...','...','...']);
      this.currentRow.push(obj);
  }
  stopClicked():void {
    this.click =  false;
    let time = new Date();

    this.stopTime = time.toLocaleString();

    this.openDialog();
    
    //Izračunat duration
    this.calculateDuration();

  }

  createObject(values) {
    let obj = {
      startTime:values[0],
      stopTime:values[1],
      projectName:values[2],
      duration:values[3]
    }
    return obj
  } 

  calculateDuration(): void {
    let hoursDifference = (Number(this.stopTime.split(":")[0]) - Number(this.startTime.split(":")[0])).toString();
    let minutesDifference = (Number(this.stopTime.split(":")[1]) - Number(this.startTime.split(":")[1])).toString();
    let secondsDifference =  (Number(this.stopTime.split(":")[2]) - Number(this.startTime.split(":")[2])).toString();
    this.duration = hoursDifference + ":" + minutesDifference + ":" + secondsDifference; 
  }
  
}
