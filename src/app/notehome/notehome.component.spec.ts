import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotehomeComponent } from './notehome.component';

describe('NotehomeComponent', () => {
  let component: NotehomeComponent;
  let fixture: ComponentFixture<NotehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
