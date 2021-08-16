import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import IQuota from 'src/app/models/IQuota';

@Component({
  selector: 'app-quota-form',
  templateUrl: './quota-form.component.html',
  styleUrls: ['./quota-form.component.scss']
})
export class QuotaFormComponent implements OnInit {
  @Output() calculate = new EventEmitter<IQuota>();
  
  quota: IQuota = {
    quota: NaN,
    rate: 5,
    value: NaN
  };

  constructor() { }

  ngOnInit(): void {
  }

  sendForm() {
    this.calculate.emit(this.quota)
    this.reset()
  }

  reset() {
    this.quota = {
      quota: null,
      value: null,
      rate: 5,
    };
  }


}
