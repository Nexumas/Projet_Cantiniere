import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserAccountComponent } from './admin-user-account.component';

describe('AdminUserAccountComponent', () => {
  let component: AdminUserAccountComponent;
  let fixture: ComponentFixture<AdminUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUserAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
