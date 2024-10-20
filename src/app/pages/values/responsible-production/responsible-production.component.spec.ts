import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleProductionComponent } from './responsible-production.component';

describe('ResponsibleProductionComponent', () => {
  let component: ResponsibleProductionComponent;
  let fixture: ComponentFixture<ResponsibleProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsibleProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsibleProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
