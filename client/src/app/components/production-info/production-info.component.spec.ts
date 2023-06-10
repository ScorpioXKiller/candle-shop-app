import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionInfoComponent } from './production-info.component';

describe('ProductionInfoComponent', () => {
  let component: ProductionInfoComponent;
  let fixture: ComponentFixture<ProductionInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionInfoComponent]
    });
    fixture = TestBed.createComponent(ProductionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
