import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailingComponent } from './trailing.component';

describe('TrailingComponent', () => {
  let component: TrailingComponent;
  let fixture: ComponentFixture<TrailingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
