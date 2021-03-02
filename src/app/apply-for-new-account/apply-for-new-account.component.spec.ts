import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyForNewAccountComponent } from './apply-for-new-account.component';

describe('ApplyForNewAccountComponent', () => {
  let component: ApplyForNewAccountComponent;
  let fixture: ComponentFixture<ApplyForNewAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyForNewAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyForNewAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
