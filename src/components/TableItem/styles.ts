import styled from "styled-components";

export const TableLine = styled.tr`

`;

export const TableColumn = styled.td`
     padding: 10px 0;

`;
export const Category = styled.div<{ color: string }>`
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    text-align: center;

    background-color: ${(props) => props.color};
`;

export const Value = styled.div<{ isExpense: boolean }>`
    color: ${(props) => props.isExpense ? 'red' : 'green'};
`;