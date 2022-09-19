import { css } from '@emotion/react';
import styled from '@emotion/styled';
export interface ButtonType {
  /**
   * 버튼 비활성화
   */
  disabled?: boolean;
}

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

  ${({ disabled }: ButtonType) => {
    if (disabled) {
      return css`
        &.text--black {
          background-color: inherit;
          color: ${(props) => props.theme.colors.black};
        }
      `;
    } else {
      return css`
        &.text--black {
          background-color: inherit;
          color: red;
        }
      `;
    }
  }}
`;
