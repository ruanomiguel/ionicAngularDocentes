import { Estudiantes } from "./estudiantes";

export const ESTUDIANTES: Estudiantes[] = [
    { id: 1, nombre:'Luis',faltas_numericas:2, parcial1: 3, parcial2: 4, parcial3: 3,id_materia: 1 },
    { id: 2, nombre: 'Estiven',faltas_numericas:2, parcial1: 3, parcial2: 4, parcial3: 3, id_materia: 2 },
    { id: 3, nombre: 'Miguel',faltas_numericas:3, parcial1: 5, parcial2: 3, parcial3: 3, id_materia: 3 },
    { id: 4, nombre: 'Carlos',faltas_numericas:4, parcial1: 4, parcial2: 3, parcial3: 3, id_materia: 4},
    { id: 5, nombre: 'Messi',faltas_numericas:6, parcial1: 1, parcial2: 4, parcial3: 3, id_materia: 5},
].map(estudiante => ({
    ...estudiante,
    notafinal: (estudiante.parcial1 * 0.35) + (estudiante.parcial2 * 0.35) + (estudiante.parcial3 * 0.30)
}));
