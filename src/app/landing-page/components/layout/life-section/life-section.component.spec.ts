import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeSectionComponent } from './life-section.component';

describe('LifeSectionComponent', () => {
  let component: LifeSectionComponent;
  let fixture: ComponentFixture<LifeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
