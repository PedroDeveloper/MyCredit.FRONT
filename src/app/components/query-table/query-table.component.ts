import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-query-table',
  templateUrl: './query-table.component.html',
  styleUrls: ['./query-table.component.scss']
})

export class QueryTableComponent implements OnInit {
  @Input() customer: String;

  constructor() { }

  ngOnInit(): void {
  }

}
