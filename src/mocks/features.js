import ImageEat from "/src/assets/eat.svg";
import ImageGarbage from "/src/assets/garbage.svg";
import ImageSprout from "/src/assets/sprout.svg";
import ImageMeat from "/src/assets/meat.svg";

export const features = [
  {
    id: 0,
    title: "Еда намного вкуснее",
    subtitle: "Фермерские продукты",
    isNegative: false,
    description:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники.",
    image: ImageEat
  },
  {
    id: 1,
    title: "Просроченные продукты",
    subtitle: "Магазинные продукты",
    isNegative: true,
    description:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара.",
    image: ImageGarbage
  },
  {
    id: 2,
    title: "Натуральные продукты",
    subtitle: "Фермерские продукты",
    isNegative: false,
    description:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
    image: ImageSprout
  },
  {
    id: 3,
    title: "Некачественное мясо",
    subtitle: "Магазинные продукты",
    isNegative: true,
    description:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов.",
    image: ImageMeat
  }
];

export default features;
