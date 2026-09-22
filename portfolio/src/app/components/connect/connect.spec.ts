import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Connect } from './connect';

describe('Connect', () => {
  let component: Connect;
  let fixture: ComponentFixture<Connect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Connect],
    }).compileComponents();

    fixture = TestBed.createComponent(Connect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
