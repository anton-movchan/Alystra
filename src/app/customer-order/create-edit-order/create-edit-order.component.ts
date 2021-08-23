import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit } from '@angular/core';
import { customerOrder } from '../../models/customerOrder';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { StepperComponent } from "@progress/kendo-angular-layout";

@Component({
  selector: 'app-create-edit-order',
  templateUrl: './create-edit-order.component.html',
  styleUrls: ['./create-edit-order.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateEditOrderComponent implements AfterViewInit {

  // constructor() { }

  ngOnInit(): void {
  }

  data:customerOrder = {
    addressFrom: "",
    addressTo: "",
    service: ""
  } ;
  //public stepper:any;
  @ViewChild(StepperComponent) stepper:StepperComponent;
  ngAfterViewInit() {
    this.stepper.currentStep = 0;
  }

  public currentStep = 0;
  public stepType = 'indicator';
  public stepTypes: Array<string> = ['indicator', 'label', 'full'];
  public current = 1;
  
  private isStepValid = (index: number): boolean => {
    return this.getGroupAt(index).valid || this.currentGroup.untouched;
  };
  private shouldValidate = (index: number): boolean => {
    return this.getGroupAt(index).touched && this.currentStep >= index;
  };
  public steps = [
    { label: 'CUSTOMER AND CONTACT DETAILS', isValid: this.isStepValid, validate: this.shouldValidate },
    { label: 'SERVICE', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'LOCATIONS', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'GOODS', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'DATE AND TIME', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'INSTRUCTIONS AND INFORMATION', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'REQUIREMENTS', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'REFERENCES', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'VALUE ADDED SERVICES', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'NOTIFICATIONS', isValid: this.isStepValid, validate: this.shouldValidate  },
    { label: 'SUMMARY', disabled: 'true', isValid: this.isStepValid, validate: this.shouldValidate  }
];
  public form = new FormGroup({
    customerAndContactDetails: new FormGroup({
      subCustomer: new FormControl(""),
      role: new FormControl(""),
      phone: new FormControl(""),
      email: new FormControl(""),
      bookingName: new FormControl("")
    }),
    serviceDetails: new FormGroup({
      serviceSelector: new FormControl("")
    }),
    locationDetails: new FormGroup({
      addressFrom: new FormControl(null, Validators.required),
      addressTo: new FormControl("", Validators.required)
    }),
    goodsDetails: new FormGroup({

    }),
    dateAndTimeDetails: new FormGroup({

    }),
    instructionsAndInformationDetails: new FormGroup({

    }),
    requirementsAndInformationDetails: new FormGroup({

    }),
    referencesDetails: new FormGroup({

    }),
    valueAddedServicesDetails: new FormGroup({

    }),
    notificationDetails: new FormGroup({

    }),
    summaryDetails: new FormGroup({

    }),

  });

  
  public get currentGroup(): FormGroup {
    return this.getGroupAt(this.currentStep);
  }

  private getGroupAt(index: number): FormGroup {
    const groups = Object.keys(this.form.controls).map(groupName =>
      this.form.get(groupName)
    ) as FormGroup[];

    return groups[index];
  }

  public next(): void {
    if (this.currentGroup.valid && this.stepper.currentStep !== this.steps.length) {
      this.stepper.currentStep += 1;
      return;
    }

    this.currentGroup.markAllAsTouched();
    this.stepper.validateSteps();
  }

  public prev(): void {
    this.stepper.currentStep -= 1;
  }

  public submit(): void {
    if (!this.currentGroup.valid) {
      this.currentGroup.markAllAsTouched();
      this.stepper.validateSteps();
    }
    if (this.form.valid) {
      console.log("Submitted data", this.form.value);
    }
    else{
      console.log("invalid", this.form.value);
    }
  }

  public get currentWizardStep()
  {
    return this.currentStep;
  }

}
