import { TipoItem } from "./tipo_item";

export interface Item {
    id: string,
    tipo_item: TipoItem,
    curso: string,
    materia: string,
    enunciado: string,
    alternativas: Array<[number, string]>,
    correta: number
}