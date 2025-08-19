import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarComponent } from './digital-mar.component';

describe('DigitalMarComponent', () => {
  let component: DigitalMarComponent;
  let fixture: ComponentFixture<DigitalMarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
