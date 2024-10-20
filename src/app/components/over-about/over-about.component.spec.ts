import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverAboutComponent } from './over-about.component';

describe('OverAboutComponent', () => {
  let component: OverAboutComponent;
  let fixture: ComponentFixture<OverAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
