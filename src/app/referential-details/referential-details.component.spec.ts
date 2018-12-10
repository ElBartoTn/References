import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentialDetailsComponent } from './referential-details.component';

describe('ReferentialDetailsComponent', () => {
  let component: ReferentialDetailsComponent;
  let fixture: ComponentFixture<ReferentialDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferentialDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentialDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
