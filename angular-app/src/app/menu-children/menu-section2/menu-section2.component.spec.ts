import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSection2Component } from './menu-section2.component';

describe('MenuSection2Component', () => {
  let component: MenuSection2Component;
  let fixture: ComponentFixture<MenuSection2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSection2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
