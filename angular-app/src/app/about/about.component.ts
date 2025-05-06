import { Component } from '@angular/core';
import { Section3Component } from '../home-children/section3/section3.component';
import { RouterLink } from '@angular/router';
import { Section4Component } from '../home-children/section4/section4.component';
import { HomeComponent } from '../home/home.component';
import { Section5Component } from '../home-children/section5/section5.component';
import { Section6Component } from '../home-children/section6/section6.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    Section3Component,
    RouterLink,
    Section4Component,
    HomeComponent,
    Section5Component,
    Section6Component,
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
