import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerOrderComponent } from './customer-order/customer-order.component';
import { CreateEditOrderComponent } from './customer-order/create-edit-order/create-edit-order.component';
import { WizardComponent } from './wizard/wizard.component';
import { SharedService } from './shared.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FormGroup, FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { CustomerContactDetailsComponent } from './customer-order/create-edit-order/customer-contact-details/customer-contact-details.component';
import { ServiceDetailsComponent } from './customer-order/create-edit-order/service-details/service-details.component';





@NgModule({
  declarations: [
    AppComponent,
    CustomerOrderComponent,
    CreateEditOrderComponent,
    WizardComponent,
    CustomerContactDetailsComponent,
    ServiceDetailsComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    InputsModule,
    DropDownsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
