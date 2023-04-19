import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementOffersComponent } from './management-offers.component';

describe('ManagementOffersComponent', () => {
  let component: ManagementOffersComponent;
  let fixture: ComponentFixture<ManagementOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagementOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
