import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { informa } from '../informa';
import { INFORMA } from '../lista-masinforma';


@Injectable({
  providedIn: 'root'
})
export class InformaService {

  constructor() { }

  getInformadeEstudiantes(id_materia: number): Observable<informa[] | undefined>{
    id_materia = Number(id_materia);
    return of(INFORMA.filter(x => x.id_materia === id_materia));
  }

}
