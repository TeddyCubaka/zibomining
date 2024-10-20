import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthAndSafeComponent } from './health-and-safe.component';

describe('HealthAndSafeComponent', () => {
  let component: HealthAndSafeComponent;
  let fixture: ComponentFixture<HealthAndSafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthAndSafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthAndSafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
