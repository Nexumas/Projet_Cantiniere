import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountOverviewComponent } from './user-account-overview.component';

describe('UserAccountOverviewComponent', () => {
  let component: UserAccountOverviewComponent;
  let fixture: ComponentFixture<UserAccountOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccountOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
