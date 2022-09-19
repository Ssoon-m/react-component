import { css } from '@emotion/react';
import styled from '@emotion/styled';
export interface ButtonType {
  /**
   * 버튼 비활성화
   */
  disabled?: boolean;
}

const dynamicStyle = (props: any) => {
  if (props.disabled) {
    return css`
      &.text--black {
        background-color: inherit;
        color: ${props.theme.colors.black};
        border: 2px solid ${props.theme.colors.grey};
        color: ${props.theme.colors.grey};
        point-events: none;
      }
      &.text--white {
        background-color: ${props.theme.colors.grey};
        border: 2px solid ${props.theme.colors.grey};
        color: ${props.theme.colors.white};
        point-events: none;
      }
    `;
  } else {
    return css`
      &.text--black {
        background-color: inherit;
        border: 2px solid ${props.theme.colors.black};
        color: ${props.theme.colors.black};
        &:hover,
        &:focus {
          cursor: pointer;
          background-color: ${props.theme.colors.grey};
        }
      }
      &.text--white {
        background-color: ${props.theme.colors.black};
        border: 2px solid ${props.theme.colors.black};
        color: ${props.theme.colors.white};
        &:hover,
        &:focus {
          cursor: pointer;
          background-color: ${props.theme.colors.grey};
        }
      }
    `;
  }
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 4px;
  &.size--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &.size--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &.size--large {
    font-size: 16px;
    padding: 12px 24px;
  }
  ${dynamicStyle}
`;
