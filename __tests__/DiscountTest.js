import Discount from "../src/models/Discount.js";

const expected = [
  new Map([
    ["크리스마스 디데이 할인", -3400],
    ["평일 할인", -2023],
    ["특별 할인", -1000],
  ]),
  new Map(),
  new Map([
    ["크리스마스 디데이 할인", -3100],
    ["주말 할인", -6069],
  ]),
  new Map([
    ["크리스마스 디데이 할인", -1200],
    ["특별 할인", -1000],
  ]),
];
let testIndex = -1;
test.each([
  [25, new Map([["초코케이크", 1]])],
  [
    26,
    new Map([
      ["해산물파스타", 3],
      ["티본스테이크", 2],
    ]),
  ],
  [
    22,
    new Map([
      ["양송이수프", 2],
      ["초코케이크", 1],
      ["크리스마스파스타", 3],
    ]),
  ],
  [
    3,
    new Map([
      ["티본스테이크", 1],
      ["바비큐립", 1],
      ["해산물파스타", 1],
      ["레드와인", 1],
    ]),
  ],
])("날짜 할인(크리스마스, 평일, 주말, 특별) 테스트", (date, order) => {
  const discount = new Discount();
  const result = discount.calculateDiscount(date, order);
  testIndex += 1;
  expect(result).toEqual(expected[testIndex]);
});
