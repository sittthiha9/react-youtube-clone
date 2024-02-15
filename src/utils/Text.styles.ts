import styled from "styled-components";

export const Text = styled.p`
  color: ${({theme}) => theme.text};
  font-size: 14px;

  &.logo{
    letter-spacing: -1px;
    font-size: 22px;
    font-family: "Oswald", sans-serif;
  }

  &.auth{
    color: ${(props) => props.theme.authBlue};
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`