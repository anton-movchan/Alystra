import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
  @Input() public serviceDetails: FormGroup;
  public services: Array<string> = ['Test', 'Another', 'One more'];
  constructor() { }

  ngOnInit(): void {
  }

}
