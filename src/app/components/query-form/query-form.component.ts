import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.scss']
})
export class QueryFormComponent implements OnInit {
  @Output() queryData = new EventEmitter<Number>();
  
  id: Number;

  constructor() { }

  ngOnInit(): void {
  }

  searchData() {
    this.queryData.emit(this.id);
    this.id = null;
  }

}
