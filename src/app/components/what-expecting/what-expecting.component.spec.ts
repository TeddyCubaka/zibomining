import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatExpectingComponent } from './what-expecting.component';

describe('WhatExpectingComponent', () => {
  let component: WhatExpectingComponent;
  let fixture: ComponentFixture<WhatExpectingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatExpectingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatExpectingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
