import { useState, useEffect } from 'react';
import { Body, Container, Header, HeaderText } from './App.styles';
import { Item } from './types/Item';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import InfoArea from './components/InfoArea';
import { categories } from './data/categories';
import { InputArea } from './components/InputArea';

function App() {
    const [list, setList] = useState(items);
    // lista e um determinado mês
    const [filteredList, setFilteredList] = useState<Item[]>([]);
    const [currentMounth, setCurrentMounth] = useState(getCurrentMonth);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);

    // filtrar lista pelo mês
    // sempre que list e current month forem alterados
    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMounth));
    }, [list, currentMounth]);

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;

        for (let i in filteredList) {
            if (categories[filteredList[i].category].expense) {
                expenseCount += filteredList[i].value;
            } else {
                incomeCount += filteredList[i].value;
            }
        }

        setIncome(incomeCount);
        setExpense(expenseCount);
    }, [filteredList]);

    const handleMonthChange = (newMonth: string) => {
        setCurrentMounth(newMonth);
    };

    const handleAddItem = (item: Item) => {
        let newList = [...list];
        newList.push(item);
        setList(newList)
    };

    return (
        <>
            <Container>
                <Header>
                    <HeaderText>CtMoney - Gerenciador de Despesas</HeaderText>
                </Header>
                <Body>
                    {/* Área de Informações */}
                    <InfoArea
                        currentMonth={currentMounth}
                        onMonthChange={handleMonthChange}
                        income={income}
                        expense={expense}
                    />

                    {/* Área de Inserção */}
                    <InputArea onAdd={handleAddItem} />

                    {/* Tabela de Itens */}

                    <TableArea list={filteredList} />
                </Body>
            </Container>
        </>
    );
}
export default App;
