import { Item } from "../types/Item";

// arquivo para manipulação de datas
export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}
export const dateFormatter = (date: Date): string => {
    return new Intl.DateTimeFormat('pt-BR').format(date)
}
export const currencyFormatter = (currency: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(currency);
}
// filtrar baseado em uma lista
export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    // pega os dois primeiros itens do array de data 
    let [year, month] = date.split('-');

    for (let i in list) {
        if (
            list[i].date.getFullYear() === parseInt(year) &&
            (list[i].date.getMonth() + 1) === parseInt(month)
        ) {
            newList.push(list[i]);
        }
    }
    return newList;
}
export const currentMonthFormatter = (date: string): string => {
    let [year, month] = date.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    return `${months[parseInt(month) - 1]} de ${year}`;
}