import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamecontactComponent } from './namecontact.component';

describe('NamecontactComponent', () => {
  let component: NamecontactComponent;
  let fixture: ComponentFixture<NamecontactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NamecontactComponent]
    });
    fixture = TestBed.createComponent(NamecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
