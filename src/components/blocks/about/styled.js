import styled from "styled-components";
import AboutImage from "/src/assets/about.svg";

export const AboutSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  background-color: #d8ecfe;
`;

export const AboutWrapper = styled.div`
  display: flex;
  width: ${(props) => props.theme.width};
  align-items: center;
  margin: 0 auto;
`;

export const AboutPreview = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 550px;
  min-height: 235px;

  &::before {
    position: absolute;
    content: "";
    top: -30%;
    left: 105%;
    width: 445px;
    height: 445px;
    border-radius: 50%;
    background-color: #c4e2ff;
    z-index: 1;
  }
  &::after {
    position: absolute;
    content: "";
    top: -62%;
    left: 120%;
    width: 273px;
    height: 627px;
    background-image: url(${AboutImage});
    background-repeat: no-repeat;
    z-index: 2;
  }
`;

export const AboutText = styled.p`
  display: flex;
  font-size: 19px;
  line-height: 27px;
  margin: 0;
  padding: 0;
`;
