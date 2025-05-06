import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSection1Component } from './menu-section1.component';

describe('MenuSection1Component', () => {
  let component: MenuSection1Component;
  let fixture: ComponentFixture<MenuSection1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSection1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSection1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
