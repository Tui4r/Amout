import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmoutComponent } from './amout.component';

describe('AmoutComponent', () => {
  let component: AmoutComponent;
  let fixture: ComponentFixture<AmoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
