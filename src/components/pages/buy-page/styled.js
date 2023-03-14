import styled from "styled-components";
import { theme } from "../../../thems/defaultTheme";

export const BuyPageBg = styled.div`
  background-color: ${(props) => props.theme.backgroundColorGray};
  width: 100%;
`;

export const BuyPageWrapper = styled.div`
  width: ${(props) => props.theme.width};
  height: 100%;
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: space-between;
`;
