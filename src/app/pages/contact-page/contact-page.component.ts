import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm: any;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(14)]],
      email: ["", [Validators.required, Validators.email]],
      description: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(244)]],
      gender: ["", [Validators.required]],
      age: ["", [Validators.required, Validators.min(18)]],
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.submitted = true
    console.log(this.contactForm)
  }
}
