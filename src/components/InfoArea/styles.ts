import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
`;
export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;

    & img:hover {
        cursor: pointer;
        filter: opacity(0.75);
    }
`;

export const ResumeArea = styled.div<{ balance: number }>`
    display: flex;
    flex: 2;
    width: 100%;
    justify-content: center;
    align-items: center;

    & .container{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        &.balance {
            color: ${(props) => props.balance < 0 ? `red` : `green`};
        }
        & p {
            font-weight: bold;
            color: #888;
            margin-bottom: 5px;
        }
    }
`;