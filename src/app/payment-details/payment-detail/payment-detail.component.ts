import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailsService) { 

    
  }

  ngOnInit(): void {
    this.resetform();
  }

  resetform(form?: NgForm){
    if(form!=null)
     this.resetform();
    this.service.formData={
      PmId:0,
      CardHolerName:'',
      CardNumber:'',
      ExpireDate:'',
      CVV:''
    }

  }
  onSubmit(form: NgForm){
    console.log(form.value);
    this.service.paymentSave(form.value).subscribe(
      res=>{
        console.log(res);
        alert('Sucessssss');
      },
      err=>{
        console.log(err);
        alert(err);
      }
    )
  }
}
