import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatcherComponent } from './catcher.component';

describe('CatcherComponent', () => {
  let component: CatcherComponent;
  let fixture: ComponentFixture<CatcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
