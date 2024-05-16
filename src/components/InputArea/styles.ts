import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 5px;
    padding: 25px 0;

    & .input {
        display: flex;
        flex-direction: column;
    }
    & select {
        height: 25px;
        border: 1px solid #CCC;
        border-radius: 5px;
    }

    & .input input {
        display: flex;
        flex-direction: column;
        height: 25px;
        border: 1px solid #CCC;
        border-radius: 5px;

    }
    & .date input{
            display: flex;
            flex-direction: row;       
    }
    & button {
        
    }
`;
