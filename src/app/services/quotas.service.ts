import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IQuota from '../models/IQuota';

const baseURL = 'https://desafiomycreditapi.azurewebsites.net/api'

@Injectable({
  providedIn: 'root'
})
export class QuotasService {

  constructor(private httpClient: HttpClient) { }

  post(quota: IQuota) {
    return this.httpClient.post<IQuota>(`${baseURL}/Quotas/`, quota)
  }
}
