import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarEstudiantesPage } from './editar-estudiantes.page';

describe('EditarEstudiantesPage', () => {
  let component: EditarEstudiantesPage;
  let fixture: ComponentFixture<EditarEstudiantesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEstudiantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
