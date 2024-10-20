import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidePrincipalesComponent } from './guide-principales.component';

describe('GuidePrincipalesComponent', () => {
  let component: GuidePrincipalesComponent;
  let fixture: ComponentFixture<GuidePrincipalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuidePrincipalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuidePrincipalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
