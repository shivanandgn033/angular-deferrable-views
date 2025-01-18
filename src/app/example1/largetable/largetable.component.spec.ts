import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargetableComponent } from './largetable.component';

describe('LargetableComponent', () => {
  let component: LargetableComponent;
  let fixture: ComponentFixture<LargetableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LargetableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
