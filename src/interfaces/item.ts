interface Item {
    id: string,
    tipo_item: string,
    curso: string,
    materia: string,
    enunciado: string,
    alternativas: Array<[number, string]>,
    correta: number
}