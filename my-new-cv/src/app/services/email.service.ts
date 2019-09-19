import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MailParam } from '../Models/mail-param.model';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {

  }

  sendContactMail(mailParams: MailParam) {
    let url = "https://us-central1-my-cv-fbfaa.cloudfunctions.net/sendContactEmail";
    return this.http.post(url, mailParams);
  }
}
