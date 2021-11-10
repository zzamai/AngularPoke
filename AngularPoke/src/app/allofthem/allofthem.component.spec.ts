import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllofthemComponent } from './allofthem.component';

describe('AllofthemComponent', () => {
  let component: AllofthemComponent;
  let fixture: ComponentFixture<AllofthemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllofthemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllofthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
