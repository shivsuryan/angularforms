import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f', { static: false }) form: NgForm;
  defaultQuestion = 'pet';
  testArea = '';
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: ''
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit() {
    console.log(this.form);
    this.user.username = this.form.value.username;
    this.user.email = this.form.value.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.textArea;
    console.log(this.user);
    this.form.reset();
  }
}
