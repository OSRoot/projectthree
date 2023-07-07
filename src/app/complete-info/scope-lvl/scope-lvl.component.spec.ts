import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScopeLvlComponent } from './scope-lvl.component';

describe('ScopeLvlComponent', () => {
  let component: ScopeLvlComponent;
  let fixture: ComponentFixture<ScopeLvlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScopeLvlComponent]
    });
    fixture = TestBed.createComponent(ScopeLvlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
