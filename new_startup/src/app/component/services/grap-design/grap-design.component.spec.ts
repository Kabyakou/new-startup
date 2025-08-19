import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrapDesignComponent } from './grap-design.component';

describe('GrapDesignComponent', () => {
  let component: GrapDesignComponent;
  let fixture: ComponentFixture<GrapDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrapDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrapDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
