import { Component, OnInit } from '@angular/core';
import { PaymentDetailsService } from 'src/app/shared/payment-details.service';
import { PaymentDeatils } from 'src/app/shared/payment-deatils.model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [  ],
  
})
export class PaymentDetailListComponent implements OnInit {
  public p: number = 1;
  constructor(public service:PaymentDetailsService, private tosterservice:ToastrService ) { }
  ngOnInit(): void {
    this.service.getall();
    
  }
  public populateform(pd:PaymentDeatils){
    this.service.formData=Object.assign({},pd);
  }
  public deletedata(PmId){    
    debugger
      this.service.Delete(PmId).subscribe(
        res=>{                 
          this.tosterservice.warning("Thank you","Successfully Deleted");
          this.service.getall();         
        },
        err=>{
          console.log(err);
          this.tosterservice.error("error occieres")
             }
      )
    }
}
