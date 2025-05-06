import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuSection1Component } from '../menu-children/menu-section1/menu-section1.component';
import { MenuSection2Component } from '../menu-children/menu-section2/menu-section2.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuSection1Component, MenuSection2Component],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
