import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'money-dropdown',
  templateUrl: './money-dropdown.component.html',
  styleUrls: ['./money-dropdown.component.scss'],
  standalone: true,
	imports: [NgbDropdownModule, CommonModule],
})
export class MoneyDropdownComponent {

  @Input() categories: string[] = [];

}
