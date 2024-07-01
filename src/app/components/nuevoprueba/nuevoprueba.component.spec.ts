import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevopruebaComponent } from './nuevoprueba.component';

describe('NuevopruebaComponent', () => {
  let component: NuevopruebaComponent;
  let fixture: ComponentFixture<NuevopruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevopruebaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevopruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
