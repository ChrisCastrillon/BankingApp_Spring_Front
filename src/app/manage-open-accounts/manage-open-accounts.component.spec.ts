import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOpenAccountsComponent } from './manage-open-accounts.component';

describe('ManageOpenAccountsComponent', () => {
  let component: ManageOpenAccountsComponent;
  let fixture: ComponentFixture<ManageOpenAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageOpenAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageOpenAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
