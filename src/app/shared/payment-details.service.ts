import { Injectable } from '@angular/core';
import { PaymentDeatils } from './payment-deatils.model';
import { HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  formData: PaymentDeatils
  readonly rootURL="http://localhost:52026/api/"

  constructor(private http:HttpClient) { }

 public paymentSave(formData:PaymentDeatils){

  return this.http.post(this.rootURL+"PaymentDetails",formData);
 }

 
}
