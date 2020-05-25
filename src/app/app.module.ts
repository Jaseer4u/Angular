import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailsService } from './shared/payment-details.service';
import { FormsModule  } from "@angular/forms";
import { HttpClientModule  } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
     
  ],
  providers: [PaymentDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
