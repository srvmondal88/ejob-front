import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherdetailsComponent } from './otherdetails.component';

describe('OtherdetailsComponent', () => {
  let component: OtherdetailsComponent;
  let fixture: ComponentFixture<OtherdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherdetailsComponent]
    });
    fixture = TestBed.createComponent(OtherdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
