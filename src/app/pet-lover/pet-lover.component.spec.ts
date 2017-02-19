/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PetLoverComponent } from './pet-lover.component';

describe('PetLoverComponent', () => {
  let component: PetLoverComponent;
  let fixture: ComponentFixture<PetLoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetLoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetLoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
