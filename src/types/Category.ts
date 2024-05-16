export type Category = {
    [tag: string]: {
        title: string,
        color: string,
        expense: boolean
    }
    // Category servirá visualmente para alterar a cor do item
    // 'title' é o nome da categoria que aparecerá em 'Categoria'
}