import './styles';
import { Container, MonthArea, ResumeArea } from './styles';
import arrowLeftImg from '../../assets/arrow_left.svg';
import arrowRightImg from '../../assets/arrow_right.svg';
import {
    currencyFormatter,
    currentMonthFormatter,
} from '../../helpers/dateFilter';

type Props = {
    currentMonth: string;
    income: number;
    expense: number;
    onMonthChange: (newMonth: string) => void;
};
export default function InfoArea({
    currentMonth,
    income,
    expense,
    onMonthChange,
}: Props) {
    const handleChangeMonth = (action: string) => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 5);
        currentDate.setMonth(eval(`currentDate.getMonth() ${action} 1`));
        onMonthChange(
            `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`
        );
    };

    return (
        <>
            <Container>
                <MonthArea>
                    <img
                        src={arrowLeftImg}
                        width={'45px'}
                        alt="Seta esquerda"
                        onClick={() => handleChangeMonth('-')}
                    />
                    <p>{currentMonthFormatter(currentMonth)}</p>
                    <img
                        src={arrowRightImg}
                        width={'45px'}
                        alt="Seta direita"
                        onClick={() => handleChangeMonth('+')}
                    />
                </MonthArea>
                <ResumeArea balance={income - expense}>
                    <div className="container income">
                        <p>Receitas</p>
                        <strong>{currencyFormatter(income)}</strong>
                    </div>
                    <div className="container expense">
                        <p>Despesas</p>
                        <strong>{currencyFormatter(expense)}</strong>
                    </div>
                    <div className="container balance">
                        <p>Balanço</p>
                        <strong>{currencyFormatter(income - expense)}</strong>
                    </div>
                </ResumeArea>
            </Container>
        </>
    );
}
