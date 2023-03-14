import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const HeaderWrapper = styled.div`
  width: ${(props) => props.theme.width};
  min-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const HeaderButton = styled(Button)`
  background-color: ${(props) => props.theme.bgColorFormBtn};
  color: #fff;
  padding: 16px 100px;

  &:hover {
    opacity: 0.5;
  }
`;
