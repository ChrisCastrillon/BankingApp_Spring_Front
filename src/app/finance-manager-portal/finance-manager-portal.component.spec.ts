import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceManagerPortalComponent } from './finance-manager-portal.component';

describe('FinanceManagerPortalComponent', () => {
  let component: FinanceManagerPortalComponent;
  let fixture: ComponentFixture<FinanceManagerPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceManagerPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceManagerPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
