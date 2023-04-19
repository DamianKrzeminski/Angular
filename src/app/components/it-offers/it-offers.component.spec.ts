import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItOffersComponent } from './it-offers.component';

describe('ItOffersComponent', () => {
  let component: ItOffersComponent;
  let fixture: ComponentFixture<ItOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
