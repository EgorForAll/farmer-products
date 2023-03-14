import React from "react";
import styled from "styled-components";
import Ul from "../../styled/ul";
import { Li } from "../../styled/li";
import Checkbox from "../checkbox/checkbox";

const StyledLi = styled(Li)`
  padding: 15px 0;
  display: flex;
  align-content: center;
`;

function CheckboxList({
  selectValues, // массив выбранных значений
  labelComponent, // Компонент для отображения label
  options, // массив с объектами для выбора {title: заголовок, value: значение}
  name, // имя
  onChange // событие при изменении
}) {
  const handleChange = (value) => {
    const newValue = [...selectValues];
    const indexValue = newValue.indexOf(value);
    if (indexValue !== -1) {
      newValue.splice(indexValue, 1);
    } else {
      newValue.push(value);
    }
    onChange && onChange(newValue);
  };

  return (
    <Ul>
      {options.map((option) => (
        <StyledLi key={option.value}>
          <Checkbox
            labelComponent={labelComponent}
            selectValues={selectValues}
            isChecked={selectValues.includes(option.value)}
            name={name}
            value={option.value}
            text={option.title}
            onChange={handleChange}
          />
        </StyledLi>
      ))}
    </Ul>
  );
}

export default CheckboxList;
