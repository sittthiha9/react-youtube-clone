import styled from "styled-components";

export const StyledCategories = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: .5rem;
  position: relative;
  padding-bottom: .6rem;
  padding-top: 2rem;
  z-index: 100;
  padding-right: 10rem;
`

export const CategoryItem = styled.div`
  background-color: ${({theme: {divider, text}}) => divider};
  padding: .5rem 0.8rem;
  border-radius: .5rem;
  white-space: nowrap;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    color: ${({theme: {background, text}}) => text};
  }

  &:hover{
    cursor: pointer;
  }
`