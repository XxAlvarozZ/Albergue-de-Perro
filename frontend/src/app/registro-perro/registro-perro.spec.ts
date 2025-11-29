import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPerro } from './registro-perro';

describe('RegistroPerro', () => {
  let component: RegistroPerro;
  let fixture: ComponentFixture<RegistroPerro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPerro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPerro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
