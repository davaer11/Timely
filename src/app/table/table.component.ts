import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  

  projects = [];
  @Input ('parentData') public currentRow;
  

  //@Output() public childEvent = new EventEmitter();

  /*projects = [
    {
      startTime: '21h',
      stopTime: '23h',
      projectName: 'project1',
      duration:'2h'
    },
    {
      startTime: '15h',
      stopTime: '24h',
      projectName: 'project2',
      duration:'9h'
    }

  ]*/
  displayedColumns = ['Project', 'Start', 'Stop', 'Duration'];

  ngOnInit(): void {
  }

}
