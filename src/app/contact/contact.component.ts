import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      age: new FormControl('', [Validators.required, Validators.min(20), Validators.max(30)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(15)]),
      acceptTerms: new FormControl(false, Validators.requiredTrue),
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      return
    }
    console.log(this.contactForm)
  }

  isCanExit() {
    if (this.submitted && this.contactForm.invalid) {
      return confirm('please fill the form')
    } else {
      return true;
    }
  }
}
