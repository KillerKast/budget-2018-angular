import { Component, OnInit } from '@angular/core';
import { MonthlyBill } from './MonthlyBill.js';

@Component({
  selector: 'app-monthly-bill-entry',
  templateUrl: './monthly-bill-entry.component.html',
  styleUrls: ['./monthly-bill-entry.component.css']
})
export class MonthlyBillEntryComponent implements OnInit {

  monthlyBill : MonthlyBill = {
    id : null,
    name: null,
    amount: null,
    paymentDate: null
  }

  constructor() { }

  ngOnInit() {
  }

  submit() {
    console.log(this.monthlyBill)
  }

}
