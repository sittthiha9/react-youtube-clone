import styled from "styled-components";

export const StyledSetting = styled.div`
  direction: flex;
  flex-direction: column;
  background-color: ${({ theme: { settingsBg } }) => settingsBg};
  position: absolute;
  right: 85%;
  top: 100%;
  width: 17.3vw;
  padding: 0.5rem 0rem 0.5rem 0rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 20px 1px ${({ theme: { settingsShadow } }) => settingsShadow};
  z-index: 200000000000;
`

export const Setting = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  height: 3rem;
  padding-left: 1rem;
  color: ${({ theme: { text } }) => text};

  &:hover{
     background-color: ${({ theme: { grey2 } }) => grey2};
  }
`