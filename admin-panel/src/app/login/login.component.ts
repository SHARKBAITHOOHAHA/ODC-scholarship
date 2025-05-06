import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, HttpClient, FormGroup, FormBuilder],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, form: FormsModule) {}

  ngOnInit() {
    const SERVER_URL = 'http://localhost:3000/users/login';
    form: FormGroup;
  }
  onSubmit() {}
  login() {
    this.router.navigate(['/adminpanelapp']);
  }
}
