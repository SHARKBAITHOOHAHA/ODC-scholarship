import { Component, input } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  blogid = input.required<string>();
}
