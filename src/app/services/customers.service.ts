import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseURL = 'https://desafiomycreditapi.azurewebsites.net/api'

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private httpClient: HttpClient) { }

  getByID(id: Number) {
    return this.httpClient.get(`${baseURL}/Customers/${id}/`, { responseType: 'text' })
  }
}
