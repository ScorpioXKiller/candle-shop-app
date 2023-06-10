import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScentsDemoComponent } from './scents-demo.component';

describe('ScentsDemoComponent', () => {
  let component: ScentsDemoComponent;
  let fixture: ComponentFixture<ScentsDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScentsDemoComponent]
    });
    fixture = TestBed.createComponent(ScentsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
