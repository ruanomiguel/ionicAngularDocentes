import { Injectable } from '@angular/core';
import { Estudiantes } from '../estudiantes';
import { ESTUDIANTES } from '../lista-estudiantes';
import { Observable,of } from 'rxjs';
import { EstudiantesPageModule } from '../estudiantes/estudiantes.module';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor() { }

  getEstudiantes(): Observable<Estudiantes[]>{
    return of(ESTUDIANTES);
  }

  borrar(estudiantes: Estudiantes | number): Observable<Estudiantes[]> {
    const id = ESTUDIANTES?.findIndex(h => h==estudiantes);
    if (id > -1) {
      ESTUDIANTES.splice(id, 1);
    }
    return of(ESTUDIANTES);
  }

  getUnEstudiante(id: number): Observable<Estudiantes | undefined> {
    id = Number(id);
    return of(ESTUDIANTES.find(x => x.id === id));
 }

   editarEstudiante(estudiantes: Estudiantes): Observable<Estudiantes | undefined> {
       let id = Number(estudiantes.id);
       let indice:number = ESTUDIANTES.findIndex(x => x.id === id);
       ESTUDIANTES[indice] = estudiantes;
       return of(ESTUDIANTES[indice]);
   }

   updateEstudiantes(id: number, estudiantes: Estudiantes): Observable<Estudiantes | undefined> {
    const index = ESTUDIANTES.findIndex(x => x.id === id);
    
    if (index !== -1) {
      // Actualizar la materia en la lista
      ESTUDIANTES[index] = estudiantes;
      return of(ESTUDIANTES[index]);
    } else {
      return of(undefined);
    }
  }
}
