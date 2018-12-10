import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferentialComponent } from './referential.component';

describe('ReferentialComponent', () => {
  let component: ReferentialComponent;
  let fixture: ComponentFixture<ReferentialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferentialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
