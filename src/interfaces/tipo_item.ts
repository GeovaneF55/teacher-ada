enum Tipo {
    unico,
    multiplo,
    asserc_razao
}

enum Sigla {
    'UNI',
    'MUL',
    'ACR'
}

interface TipoItem {
    tipo: Tipo,
    sigla: Sigla
}