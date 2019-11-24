import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeEditoreComponent } from './font-size-editore.component';

describe('FontSizeEditoreComponent', () => {
  let component: FontSizeEditoreComponent;
  let fixture: ComponentFixture<FontSizeEditoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontSizeEditoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontSizeEditoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
