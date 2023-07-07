import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderworkComponent } from './headerwork.component';

describe('HeaderworkComponent', () => {
  let component: HeaderworkComponent;
  let fixture: ComponentFixture<HeaderworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderworkComponent]
    });
    fixture = TestBed.createComponent(HeaderworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
