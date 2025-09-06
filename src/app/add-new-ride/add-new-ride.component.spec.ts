import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRideComponent } from './add-new-ride.component';

describe('AddNewRideComponent', () => {
  let component: AddNewRideComponent;
  let fixture: ComponentFixture<AddNewRideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewRideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
