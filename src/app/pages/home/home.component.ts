import { Component, OnInit } from '@angular/core';
import { QuotasService } from 'src/app/services/quotas.service';
import IQuota from 'src/app/models/IQuota';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quotaResponse: IQuota;

  constructor(private quotasService: QuotasService) { }

  ngOnInit(): void {
  }

  onCalculate(quota: IQuota) {
    this.quotasService.post(quota).subscribe(
      (quotaResponse: IQuota) => this.quotaResponse = quotaResponse, 
      (error) => console.log(error) 
    )
  }

  
}
