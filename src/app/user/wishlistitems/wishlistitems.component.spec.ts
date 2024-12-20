import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistitemsComponent } from './wishlistitems.component';

describe('WishlistitemsComponent', () => {
  let component: WishlistitemsComponent;
  let fixture: ComponentFixture<WishlistitemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WishlistitemsComponent]
    });
    fixture = TestBed.createComponent(WishlistitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
