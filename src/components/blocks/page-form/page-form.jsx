import React, { useState } from "react";
import CheckboxList from "../../ui/checkbox-list/checkbox-list";
import {
  FormWrapper,
  FormOptions,
  FormOrder,
  CheckboxLabel,
  AddressInput,
  FormPriceWrapper,
  Price,
  PriceButton
} from "./styled";
import Title from "/src/components/ui/title/title";

export default function PageForm({ products }) {
  const [selectProductIds, setSelectProductIds] = useState([]);
  const [address, setAddress] = useState("");

  //id в продукты
  const selectProducts = selectProductIds.map((id) =>
    products.find((product) => product.id === id)
  );

  // цена покупки
  const fullPrice = selectProducts.reduce(
    (sum, product) => (sum += product.price),
    0
  );

  const handleBuyClick = () => {
    // eslint-disable-next-line no-alert
    alert(`Спасибо за заказ, вы купили:\n${selectProducts.map(
      (product) => `${product.name} - ${product.price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return (
    <FormWrapper>
      <FormOptions>
        <Title level={3}>Выберите продукты</Title>
        <CheckboxList
          labelComponent={CheckboxLabel}
          name={"select-products"}
          isGridList={false}
          options={products.map((product) => ({
            value: product.id,
            title: product.name
          }))}
          selectValues={selectProductIds}
          onChange={setSelectProductIds}
        />
      </FormOptions>
      <FormOrder>
        <Title level={3}>Сделать заказ</Title>
        <AddressInput
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Введите адрес доставки"
        />

        <FormPriceWrapper>
          <span>Цена</span>
          <Price>{fullPrice}</Price>
          <PriceButton
            children={"Купить"}
            disabled={!(selectProductIds.length && address)}
            onClick={handleBuyClick}
          />
        </FormPriceWrapper>
      </FormOrder>
    </FormWrapper>
  );
}
