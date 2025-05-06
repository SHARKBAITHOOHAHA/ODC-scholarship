import { Component, OnChanges, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { MenuService } from '../../services/menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu-section1',
  standalone: true,
  imports: [RouterLinkActive, RouterLink],
  templateUrl: './menu-section1.component.html',
  styleUrl: './menu-section1.component.css',
})
export class MenuSection1Component implements OnInit {
  private subscription: Subscription | null = null;
  public products: any[] = [];

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const category = params['category'] || '';
      console.log('category', category);
      this.getMenuItems('?category' + category);
    });
  }
  getMenuItems(queries: string = '') {
    this.subscription = this.menuService.getMenu(queries).subscribe((data) => {
      this.products = data;
      console.log('products', data);
    });
  }
}
