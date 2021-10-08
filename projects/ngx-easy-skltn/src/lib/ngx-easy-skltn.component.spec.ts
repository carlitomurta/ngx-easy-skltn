import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEasySkltnComponent } from './ngx-easy-skltn.component';

describe('NgxEasySkltnComponent', () => {
  let component: NgxEasySkltnComponent;
  let fixture: ComponentFixture<NgxEasySkltnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NgxEasySkltnComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEasySkltnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
