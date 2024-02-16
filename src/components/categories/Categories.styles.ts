import styled from "styled-components";

export const StyledCategories = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  gap: .5rem;
  position: relative;
  z-index: 100;
  padding-right: 10rem;
`

export const CategoryItem = styled.div<{ active: string }>`
  background-color: ${({ active, theme: { divider, text } }) => (active === "true" ? text : divider)};
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  white-space: nowrap;
  height: 2rem;
  display: flex;
  justify-content: center; 
  align-items: center;

  p{
    color: ${({ active, theme: { background, text } }) => (active === "true" ? background : text)} !important;
    user-select: none;
  }

  &:hover{
    cursor: pointer;
    background-color: ${({ theme: { grey2 } }) => grey2};
    color: ${({ active, theme: { background, text } }) => (active === "true" ? background : text)} !important;
  }
`

export const CategoriesCarousel = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 0.5rem;
  margin-bottom: -3rem;
  scroll-behavior: smooth;
`