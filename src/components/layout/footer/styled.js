import styled from "styled-components";

export const FooterWrapper = styled.footer`
  position: relative;
  display: flex;
  width: 100%;
  min-height: 80px;
`;

export const FooterContent = styled.div`
  width: ${(props) => props.theme.width};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
