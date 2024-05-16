import { currencyFormatter, dateFormatter } from '../../helpers/dateFilter';
import { Item } from '../../types/Item';
import { TableColumn, TableLine, Category, Value } from './styles';
import { categories } from '../../data/categories';

type Props = {
    item: Item;
};

export function TableItem({ item }: Props) {
    return (
        <>
            <TableLine>
                <TableColumn>{dateFormatter(item.date)}</TableColumn>
                <TableColumn>
                    <Category color={categories[item.category].color}>
                        {categories[item.category].title}
                    </Category>
                </TableColumn>
                <TableColumn>
                    {item.title}
                </TableColumn>
                <TableColumn>
                    <Value isExpense={categories[item.category].expense}>
                        {currencyFormatter(item.value)}
                    </Value>
                </TableColumn>
            </TableLine>
        </>
    );
}
