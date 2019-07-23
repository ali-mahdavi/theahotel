import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigupComponent } from './signup.component';

describe('SigupComponent', () => {
  let component: SigupComponent;
  let fixture: ComponentFixture<SigupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
