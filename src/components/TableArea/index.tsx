import { Item } from '../../types/Item';
import { TableItem } from '../TableItem';
import { TableHeadColum, Table } from './styles';

type Props = {
    list: Item[];
}
export function TableArea({ list }: Props) {

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <TableHeadColum width={100}>Data</TableHeadColum>
                        <TableHeadColum width={130}>Categoria</TableHeadColum>
                        {/* Pegará o que sobra */}
                        <TableHeadColum>Título</TableHeadColum>
                        <TableHeadColum width={150}>Valor</TableHeadColum>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <TableItem key={index} item={item}/>
                    ))}
                    
                </tbody>
            </Table>
        </>
    );
}
