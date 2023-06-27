import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmployersComponent } from './count-employers.component';

describe('CountEmployersComponent', () => {
  let component: CountEmployersComponent;
  let fixture: ComponentFixture<CountEmployersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountEmployersComponent]
    });
    fixture = TestBed.createComponent(CountEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
