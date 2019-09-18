import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EductationComponent } from './eductation.component';

describe('EductationComponent', () => {
  let component: EductationComponent;
  let fixture: ComponentFixture<EductationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EductationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EductationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
