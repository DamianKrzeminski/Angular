import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerOffersComponent } from './engineer-offers.component';

describe('EngineerOffersComponent', () => {
  let component: EngineerOffersComponent;
  let fixture: ComponentFixture<EngineerOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
