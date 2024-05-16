import { useState } from 'react';
import { Item } from '../../types/Item';
import { Container } from './styles';

type Props = {
    onAdd: (item: Item) => void;
};
export function InputArea({ onAdd }: Props) {
    const [inputTitle, setInputTitle] = useState('');
    const [inputData, setInputData] = useState('');
    const [inputCategory, setInputCategory] = useState('');
    const [inputValue, setInputValue] = useState(0);

    const handleAddEvent = () => {
        let newItem: Item = {
            category: inputCategory,
            date: new Date(inputData),
            title: inputTitle,
            value: inputValue,
        };

        onAdd(newItem);
        setInputCategory('');
        setInputData('');
        setInputTitle('');
        setInputValue(0);
    };
    return (
        <>
            <Container>
                <div className="input date">
                    <strong>Data</strong>
                    <input
                        value={inputData.toString()}
                        type="date"
                        onChange={(e) => setInputData(e.target.value)}
                    />
                </div>
                <div className="input category">
                    <strong>Categoria</strong>
                    <select
                        value={inputCategory}
                        name="Categorias"
                        onChange={(e) => setInputCategory(e.target.value)}
                    >
                        <option></option>
                        <option value="salary">Salário</option>
                        <option value="food">Alimentação</option>
                        <option value="rent">Aluguel</option>
                    </select>
                </div>
                <div className="input title">
                    <strong>Título</strong>
                    <input
                        value={inputTitle}
                        type="text"
                        onChange={(e) => setInputTitle(e.target.value)}
                    />
                </div>
                <div className="input value">
                    <strong>Valor</strong>
                    <input
                        value={inputValue}
                        type="number"
                        onChange={(e) =>
                            setInputValue(parseInt(e.target.value))
                        }
                    />
                </div>
                <button type="button" onClick={handleAddEvent}>
                    Adicionar
                </button>
            </Container>
        </>
    );
}
