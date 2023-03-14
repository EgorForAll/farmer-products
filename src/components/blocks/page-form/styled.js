import styled, { css } from "styled-components";
import checkboxSelect from "/src/assets/checkbox.svg";
import Button from "../../ui/button/button";

export const FormWrapper = styled.form`
  width: 310px;
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
`;

export const FormOptions = styled.fieldset`
  width: 100%;
  margin: 0;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 40px;
  box-sizing: border-box;
  border: none;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const FormOrder = styled.fieldset`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 20px;
  border: none;
  box-sizing: border-box;
  background-color: #fff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`;

export const CheckboxLabel = styled.span`
  display: flex;
  position: relative;
  width: 100%;
  font-size: 18px;
  text-align: left;
  align-items: center;
  cursor: pointer;

  &::after {
    content: "";
    right: 0;
    display: block;
    position: absolute;
    height: 22px;
    width: 22px;
    ${(props) =>
      props.$isChecked
        ? css`
            background-color: ${(props) => props.theme.bgColorFormBtn};
            border: 1px solid rgba(0, 0, 0, 0.1);
            background-repeat: no-repeat;
            background-image: url(${checkboxSelect});
            background-position: center center;
            z-index: 5;
          `
        : css`
            background-color: ${props.theme.backgroundColorGray};
            border: 1px solid rgba(0, 0, 0, 0.1);
          `}
  }
`;

export const AddressInput = styled.input`
  width: 100%;
  height: 50px;
  margin-top: 25px;
  color: ${(props) => props.theme.textColor};
  padding: 14px 12px;
  background-color: #f6f6f6;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const FormPriceWrapper = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Price = styled.div`
  font-size: 24px;
  line-height: 31px;
  font-weight: 700;
`;

export const PriceButton = styled(Button)`
  margin-top: 30px;
  background-color: ${(props) => props.theme.bgColorFormBtn};
  color: #fff;
  min-height: 60px;

  &:disabled {
    opacity: 0.5;
  }
`;
