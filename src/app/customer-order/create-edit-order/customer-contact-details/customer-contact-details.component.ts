import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
@Component({
  selector: 'app-customer-contact-details',
  templateUrl: './customer-contact-details.component.html',
  styleUrls: ['./customer-contact-details.component.css']
})
export class CustomerContactDetailsComponent implements AfterViewInit {

  public defaultItem: { text: string, value: number } = { text: '- select -', value: null };
  @Input() public customerAndContactDetails: FormGroup;
  
  public ngAfterViewInit(): void {
  }
  
  public subCustomers2: Array<{ text: string, value: number }> = [
    { text: 'Test', value: 1 },
    { text: 'Another', value: 2 },
    { text: 'One more', value: 3 }
];
public subCustomers: Array<string> = ['Test', 'Another', 'One more'];
public roles: Array<{ text: string, value: number }> = [
  { text: 'Test', value: 1 },
  { text: 'Another', value: 2 },
  { text: 'One more', value: 3 }
];
}
