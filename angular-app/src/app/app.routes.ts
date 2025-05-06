import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book', component: BookComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/:menuid', component: MenuDetailsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:blogid', component: BlogDetailsComponent },
  { path: '**', component: NotfoundComponent },
];
