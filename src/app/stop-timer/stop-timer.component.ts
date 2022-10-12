import { Component, EventEmitter, OnInit, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-timer',
  templateUrl: './stop-timer.component.html',
  styleUrls: ['./stop-timer.component.css']
})
export class StopTimerComponent implements OnInit {

  @Output() public childEvent = new EventEmitter();

  public stopTimerClicked = false;
  public projectName;

  constructor(public dialogRef: MatDialogRef<StopTimerComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    
  ngOnInit(): void {
  }

  stopTimer():void {
    this.dialogRef.close();
    this.stopTimerClicked = true;
    
    //let emitObject = this.createObject();
    this.childEvent.emit(this.projectName); 

  }

  createObject() {

    let obj = {
      projectName : this.projectName,
      stopTimerClicked : true
    }
    return obj
  }

}
