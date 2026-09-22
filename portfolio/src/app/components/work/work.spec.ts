import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Work } from './work';

describe('Work', () => {
  let component: Work;
  let fixture: ComponentFixture<Work>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Work],
    }).compileComponents();

    fixture = TestBed.createComponent(Work);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
