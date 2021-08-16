import { Component, OnInit, Input } from '@angular/core';
import IQuota from "../../models/IQuota"

@Component({
  selector: 'app-quota-result',
  templateUrl: './quota-result.component.html',
  styleUrls: ['./quota-result.component.scss']
})
export class QuotaResultComponent implements OnInit {

  @Input() quota: IQuota;

  constructor() { }

  ngOnInit(): void {
  }

  toCurrency(value: any) {
    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });

    return formatter.format(value);
  }
}
