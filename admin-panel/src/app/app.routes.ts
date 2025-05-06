import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ItemsComponent } from './items/items.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: RegisterComponent },
  { path: 'adminpanelapp', component: ItemsComponent },
];
