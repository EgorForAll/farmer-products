import React from "react";
import styled from "styled-components";
import VissuallyHiddenInput from "../../styled/vissually-hidden-input";

const Label = styled.label`
  display: block;
  width: 100%;
`;

export default function Checkbox({
  onClick,
  labelComponent, // Компонент для отображения label
  isChecked, // выбранно ли значение
  name, // имя
  value, // значение
  text, // текст элемента
  onChange, // событие при изменении
  ...props
}) {
  const LabelComponent = labelComponent;
  return (
    <Label>
      <VissuallyHiddenInput
        value={value}
        checked={isChecked}
        name={name}
        onChange={() => onChange(value)}
        {...props}
        type="checkbox"
      />
      <LabelComponent $isChecked={isChecked}>{text}</LabelComponent>
    </Label>
  );
}
