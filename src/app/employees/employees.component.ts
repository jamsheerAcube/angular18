import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  states: any[] = [
    { id: 1, name: 'Kerala' },
    { id: 2, name: 'Tamil Nadu' },
    { id: 3, name: 'Karnataka' }
  ]
  employeeForm!: FormGroup;
  submitted: boolean = false;

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        pincode: new FormControl('', Validators.required),
      }),
      state: new FormControl('', Validators.required),
    })

  }

  get f(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }

  get name(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }



  onSubmit() {
    this.submitted = true;
    console.log(this.employeeForm.controls['name'])
  }

}
