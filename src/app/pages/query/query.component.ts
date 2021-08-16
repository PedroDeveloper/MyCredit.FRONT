import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})
export class QueryComponent implements OnInit {
  
  customer: String;

  constructor(private queryService: QueryService) { }

  ngOnInit(): void {
  }

  findCustomerByID(id: Number) {
    this.queryService.getByID(id).subscribe(
      (customer: String) => this.customer = customer,
      (error) => this.customer = "Não Encontrado",
    )
  }

}
