import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: [
  ]
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service:PaymentDetailsService , private tosterservice:ToastrService) { 

    
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
   if(this.service.formData.PmId==0)
    this.insert(form);
    else
    this.Upate(form);
  }

  insert(form: NgForm){    
     this.service.Save().subscribe(
       res=>{       
         this.tosterservice.success("Thnk you","Successfully Submitted");
         this.resetform(form);
         this.service.getall();
       },
       err=>{
         console.log(err);
         this.tosterservice.error("error occieres")
            }
     )
   }
   Upate(form: NgForm){    
    this.service.Update().subscribe(
      res=>{       
        this.resetform(form);
        this.tosterservice.info("Thank you","Successfully Updated");
        this.service.getall();
       
      },
      err=>{
        console.log(err);
        this.tosterservice.error("error occieres")
           }
    )
  }
}
