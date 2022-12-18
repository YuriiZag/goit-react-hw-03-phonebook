import styled from "styled-components";

export const Container = styled.div`
    padding-left: 40px;
`

export const Header = styled.p`
    margin: 5px 0 10px 0;
    font-size: 32px;
    font-weight: 700;
`
export const PhonebookForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 200px;
    gap: 30px;
    padding: 40px;
    align-items: center;
    justify-content: center;
`
export const Label = styled.label`
    font-weight: 500;
    font-size: 20px;
`

export const TypingField = styled.input`
    display: block;
    padding: 5px;
    margin-top: 10px;
    border: 1px solid black;
    border-radius: 4px;
    width: 150px;
    outline: none;
    :focus{
        border: 1px solid red;
    }
` 
export const SubmitButton = styled.button`
    width: 150px;
    :focus, :hover{
        background-color: navy;
        color: white;
    }
`