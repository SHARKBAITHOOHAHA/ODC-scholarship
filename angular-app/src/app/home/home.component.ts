import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Section1Component } from '../home-children/section1/section1.component';
import { Section2Component } from '../home-children/section2/section2.component';
import { Section3Component } from '../home-children/section3/section3.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    Section1Component,
    Section2Component,
    Section3Component,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
