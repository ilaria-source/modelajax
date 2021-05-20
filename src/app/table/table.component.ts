import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../users.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() users : Users[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
