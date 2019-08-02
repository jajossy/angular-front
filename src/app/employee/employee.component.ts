import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Customer } from '../customer';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  dataSaved = false;
  employeeForm: any;
  allEmployees: Observable<Employee[]>;
  allCustomer: Customer[];
  employeeIdUpdate = null;
  massage = null;

  constructor(private formbuilder: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeForm = this.formbuilder.group({
      EmpName: ['', [Validators.required]],
      DateOfBirth: ['', [Validators.required]],
      EmailId: ['', Validators.required],
      Gender: ['', [Validators.required]],
      Address: ['', [Validators.required]],
      PinCode: ['', Validators.required]
    });
    this.getCustomer();
    //console.log(this.allCustomer);
  }

  loadAllEmployees() {
    this.allEmployees = this.employeeService.getAllEmployee();
    console.log(this.allEmployees);
  }

  loadAllCustomer() {
    //this.allCustomer = this.employeeService.getAllCustomer();
    //console.log(this.allCustomer);
  }

  getCustomer(): void {
    //this.heroes = this.heroService.getHeroes();
    this.employeeService.getCustomer()
      .subscribe(customer => {
        this.allCustomer = customer
        console.log(this.allCustomer)
      });
  }

}
