import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountOrderComponent } from './user-account-order.component';

describe('UserAccountOrderComponent', () => {
  let component: UserAccountOrderComponent;
  let fixture: ComponentFixture<UserAccountOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
