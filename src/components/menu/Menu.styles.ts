import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  .title{
    font-size: 16px;
    margin: 0.5rem 0 .5rem 1rem;
    font-weight: bold;
  }
`

export const LargeMenuSection = styled.div`
  border-bottom: 1px solid ${({ theme: { divider } }) => divider};
  padding: .7rem 0;

  &.text{
    padding: 1.0rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.2rem;
  }
`

export const MenuItem = styled.div<{ active: string }>`
  display: flex;
  color: ${({ theme: { text } }) => text};
  border-radius: 0.5rem;
  background-color: ${({ active, theme: { grey2 } }) => (active === "true" ? grey2 : 'transparent')};

  &.small{
    font-size: 26px;
    flex-direction: column;
    align-items: center;
    gap: .3rem;
    padding: 1rem 0;

    p{
      font-size: 10px;
    }
  }

  &.large{
    padding-left: 0.8rem;
    height: 2.5rem;
    margin-left: 0%.75rem;
    align-items: center;
    font-size: 23px;
    gap: 1.3rem;
  }

  &:hover{
    background-color: ${({ theme: { grey2 } }) => grey2};
    cursor: pointer;
  }
`