/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertyCardComponent } from './property-card.component';

describe('PropertyCardComponent', () => {
  let component: PropertyCardComponent;
  let fixture: ComponentFixture<PropertyCardComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
