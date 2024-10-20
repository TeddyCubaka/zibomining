import { Component } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  phone: string = '';
  company: string = '';

  successMessage: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  onSubmit() {
    this.loading = true;
    const emailData = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      phone: this.phone,
      company: this.company,
    };

    emailjs
      .send(
        'service_b7h287t',
        'template_9s51wyc',
        emailData,
        'R20hw18DTRhEXh7FE'
      )
      .then((response) => {
        this.successMessage = 'Votre message a été envoyé avec succès.';
        this.errorMessage = '';
        this.loading = false;
        console.log(response);
      })
      .catch((error) => {
        this.loading = false;
        this.errorMessage = "Une erreur s'est produite, veuillez réessayer.";
        this.successMessage = '';
        console.log(error);
      });
  }
}
