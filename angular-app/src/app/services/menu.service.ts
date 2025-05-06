import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  protected httpClient = inject(HttpClient);
  constructor() {}
  public items: any[] = [];

  getMenu(queries: string = ''): Observable<any[]> {
    return this.httpClient
      .get<any[]>('http://localhost:3000/items' + queries)
      .pipe(
        tap((res: any[]) => {
          this.items = res; // Store the response in the items array
        })
      );
  }
}
