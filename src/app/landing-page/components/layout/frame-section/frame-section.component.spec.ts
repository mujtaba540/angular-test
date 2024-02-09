import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameSectionComponent } from './frame-section.component';

describe('FrameSectionComponent', () => {
  let component: FrameSectionComponent;
  let fixture: ComponentFixture<FrameSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrameSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
