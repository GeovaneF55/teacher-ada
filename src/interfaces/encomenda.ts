import { TipoItem } from "./tipo_item";

export interface Encomenda {
    id: string,
    id_item: string,
    tipo_item: TipoItem,
    inedita: boolean,
    desc: string
}