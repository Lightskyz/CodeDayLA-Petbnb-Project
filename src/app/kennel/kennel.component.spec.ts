/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KennelComponent } from './kennel.component';

describe('KennelComponent', () => {
  let component: KennelComponent;
  let fixture: ComponentFixture<KennelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KennelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KennelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
