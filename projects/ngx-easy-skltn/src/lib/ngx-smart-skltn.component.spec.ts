import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSmartSkltnComponent } from './ngx-easy-skltn.component';

describe('NgxSmartSkltnComponent', () => {
  let component: NgxSmartSkltnComponent;
  let fixture: ComponentFixture<NgxSmartSkltnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxSmartSkltnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSmartSkltnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
