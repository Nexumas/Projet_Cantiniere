import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCardEditComponent } from './admin-card-edit.component';

describe('AdminCardEditComponent', () => {
  let component: AdminCardEditComponent;
  let fixture: ComponentFixture<AdminCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
