import { Injectable } from '@angular/core';
import { Materias } from '../materias';
import { MATERIAS } from '../lista-materias';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MateriasService {

  constructor() { }

  getMatrias(): Observable<Materias[]>{
    return of(MATERIAS);
  }

  borrar(materias: Materias | number): Observable<Materias[]> {
    const id = MATERIAS?.findIndex(h => h==materias);
    if (id > -1) {
      MATERIAS.splice(id, 1);
    }
    return of(MATERIAS);
  }

  getUnaMaterias(id: number): Observable<Materias | undefined> {
    id = Number(id);
    return of(MATERIAS.find(x => x.id === id));
}

  editarPelicula(materias: Materias): Observable<Materias | undefined> {
      let id = Number(materias.nombre_materia);
      let indice: number = MATERIAS.findIndex(x => x.nombre_materia === nombre_materia);
      MATERIAS[indice] = materias;
      return of(MATERIAS[indice]);
  }
}
