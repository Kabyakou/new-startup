import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonialsSectionComponent } from './testmonials-section.component';

describe('TestmonialsSectionComponent', () => {
  let component: TestmonialsSectionComponent;
  let fixture: ComponentFixture<TestmonialsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestmonialsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmonialsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
