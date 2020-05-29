import { Injectable } from '@angular/core';
import { PaymentDeatils } from './payment-deatils.model';
import { HttpClient  } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailsService {
  formData: PaymentDeatils
  readonly rootURL="http://localhost:52026/api/"
  list : PaymentDeatils[]

  constructor(private http:HttpClient) { }

 public Save(){
  return this.http.post(this.rootURL+"PaymentDetails",this.formData);
 }
 public Update(){
  return this.http.put(this.rootURL+"PaymentDetails/"+this.formData.PmId,this.formData);
 }

 public Delete(id){
  return this.http.delete(this.rootURL+"PaymentDetails/"+id);
 }
public getall(){
  this.http.get(this.rootURL+"PaymentDetails")
  .toPromise()
  .then(res=> this.list =res as PaymentDeatils[]);
}

 
}
