import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abt } from './abt';

describe('Abt', () => {
  let component: Abt;
  let fixture: ComponentFixture<Abt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
