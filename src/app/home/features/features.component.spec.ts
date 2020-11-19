import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FEATURESComponent } from './features.component';

describe('FEATURESComponent', () => {
  let component: FEATURESComponent;
  let fixture: ComponentFixture<FEATURESComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FEATURESComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FEATURESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
