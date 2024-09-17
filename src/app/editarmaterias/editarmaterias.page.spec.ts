import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarmateriasPage } from './editarmaterias.page';

describe('EditarmateriasPage', () => {
  let component: EditarmateriasPage;
  let fixture: ComponentFixture<EditarmateriasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarmateriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
