import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPreferenceComponent } from './work-preference.component';

describe('WorkPreferenceComponent', () => {
  let component: WorkPreferenceComponent;
  let fixture: ComponentFixture<WorkPreferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkPreferenceComponent]
    });
    fixture = TestBed.createComponent(WorkPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
