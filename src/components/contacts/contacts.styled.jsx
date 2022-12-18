import styled from "styled-components";

export const Container = styled.div`
  padding-left: 40px;
`

export const Header = styled.p`
  margin: 5px 0 10px 0; 
  font-size: 32px;
  font-weight: 700;
`;
export const FilterField = styled.input`
  display: block;
  padding: 5px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 4px;
  width: 150px;
  outline: none;
  :focus {
    border: 1px solid red;
  }
` 
export const DeleteButton = styled.button`
  margin-left: 20px;
  border-radius: 4px;
  border: 1px solid black;
  :hover,
  :focus {
    background-color: red;
    outline: none;
    border-radius: 4px;
    border: 1px solid black;
  }
`
export const ContactList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const ContactName = styled.span`
    font-weight: 500;
`
export const ContactNumber = styled.span`
    margin-left: 10px;
`