export function itensDeLista1EstaoEmLista2(lista1: unknown[], lista2: unknown[]) {
    // Padroniza todos os itens das listas para string minúscula
    const lista2Lower = lista2.map(item => String(item).toLowerCase());
    return lista1.every((itemLista1) => lista2Lower.includes(String(itemLista1).toLowerCase()));
}