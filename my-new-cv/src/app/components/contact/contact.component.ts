import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  submitted: boolean = false;
  loading: boolean = false;
  sendMailSuccess: boolean = false;
  sendMailError: boolean = false;

  constructor(private mailService: EmailService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      entreprise: ['', []],
      surname: ['', Validators.required],
      content: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });

  }

  onSubmitContactForm() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.sendMailSuccess = false;
    this.sendMailError = false;

    this.loading = true;

    this.mailService.sendContactMail(this.contactForm.value).subscribe(
      data => {
        this.loading = false;
        this.sendMailSuccess = true;
        setTimeout(() => {
          this.sendMailSuccess = false;
        }, 3000);
      },
      err => {
        this.loading = false;
        this.sendMailError = true;
        setTimeout(() => {
          this.sendMailError = false;
        }, 3000);
      }
    );
  }

}
