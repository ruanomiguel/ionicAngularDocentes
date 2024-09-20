import { Estudiantes } from "./estudiantes";

export const ESTUDIANTES: Estudiantes[] = [
    { id: 1, nombre: 'Luis', parcial1: 3, parcial2: 4, parcial3: 3,id_materia: 1 },
    { id: 2, nombre: 'Estiven', parcial1: 3, parcial2: 4, parcial3: 3, id_materia: 2 },
    { id: 3, nombre: 'Miguel', parcial1: 5, parcial2: 3, parcial3: 3, id_materia: 3 },
    { id: 4, nombre: 'Carlos', parcial1: 4, parcial2: 3, parcial3: 3, id_materia: 4},
    { id: 5, nombre: 'Messi', parcial1: 1, parcial2: 4, parcial3: 3, id_materia: 5},
].map(estudiante => ({
    ...estudiante,
    notafinal: (estudiante.parcial1 * 0.35) + (estudiante.parcial2 * 0.35) + (estudiante.parcial3 * 0.30)
}));
