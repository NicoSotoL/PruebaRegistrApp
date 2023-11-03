import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnoPage } from './alumno.page';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('AlumnoPage', () => {
  let component: AlumnoPage;
  let fixture: ComponentFixture<AlumnoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoPage ],
    })
    .compileComponents();
    fixture = TestBed.createComponent(AlumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
