import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWordlComponent } from './hello-wordl.component';

describe('HelloWordlComponent', () => {
  let component: HelloWordlComponent;
  let fixture: ComponentFixture<HelloWordlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWordlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWordlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
