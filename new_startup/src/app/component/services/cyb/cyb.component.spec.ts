import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CybComponent } from './cyb.component';

describe('CybComponent', () => {
  let component: CybComponent;
  let fixture: ComponentFixture<CybComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CybComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CybComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
