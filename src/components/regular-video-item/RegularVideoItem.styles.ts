import styled from "styled-components";
import { css } from "styled-components";

export const StyledRegularVideoItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  &:hover {
    cursor: pointer;
  }

  &.smallView {
    flex-direction: row;
    height: auto;
  }
`;

export const RegularVideoThumbnail = styled.div<{ $isMenuSmall?: boolean }>`
  width: 100%;
  height: 12.2rem;
  border-radius: 0.8rem;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }

  ${({ $isMenuSmall }) =>
    $isMenuSmall &&
    css`
      height: 13.7rem;
    `}

  &.smallView {
    height: 6rem;
    width: 19rem;
  }
`;

export const Time = styled.div`
  background-color: ${({ theme: { background } }) => background};
  width: max-content;
  padding: 0.15rem 0.25rem;
  border-radius: 0.3rem;
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  opacity: 85%;

  p {
    font-size: 13px;
  }
`;

export const RegularVideoContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2.3rem 1fr;
  gap: 0.7rem;

  &.smallView {
    display: flex;
  }
`;

export const RegularVideoPic = styled.div`
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 100rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }

  &.smallView {
    display: none;
  }
`;

export const RegularVideoTile = styled.div`
  margin-top: 0.2rem;

  .videoItem {
    font-size: 16px;
    font-weight: 400;
  }

  .name {
    font-size: 13.5px;
    margin: 0.5rem 0 0.2rem 0;
    color: ${({ theme: { text } }) => text};
    opacity: 70%;
    font-weight: 400;
  }

  .details {
    font-size: 13px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    color: ${({ theme: { text } }) => text};
    opacity: 70%;
  }

  .dot {
    font-size: 8px;
  }

  &.smallView {
    .videoItem {
      font-size: 14px;
    }

    .name {
      font-size: 12px;
    }

    .details {
      font-size: 12px;
    }
  }
`;
