const MESSAGE = Object.freeze({
  intro: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n",
  getDate:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  getMenu:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
  preview: "우테코 식당에서 받을 이벤트 혜택 미리 보기!\n",
  menu: "<주문 메뉴>",
  cost: "\n<할인 전 총주문 금액>\n",
  giveaway: "\n<증정 메뉴>\n",
  benefit: "\n<혜택 내역>",
  totalbenefit: "\n<총혜택 금액>\n",
  payment: "\n<할인 후 예상 결제 금액>\n",
  badge: "\n<12월 이벤트 배지>\n",
});

const PREFIX = Object.freeze("[ERROR]");
const SUFFIX = Object.freeze("다시 입력해 주세요.");
const ERROR = Object.freeze({
  date: `${PREFIX} 유효하지 않은 날짜입니다. ${SUFFIX}`,
  menu: `${PREFIX} 유효하지 않은 주문입니다. ${SUFFIX}`,
});

const DATE = Object.freeze({
  start: 1,
  end: 31,
  weekday: [
    3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 14, 25, 26, 27, 28,
    31,
  ],
  weekend: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
  christmas: 25,
  special: [3, 10, 17, 24, 25, 31],
});

const COST_CRITERIA = Object.freeze({
  discount: 10000,
  giveaway: 120000,
});

const DISCOUNT = Object.freeze({
  year: -2023,
  unit: -1000,
  increase: -100,
});

const GIVEAWAY = Object.freeze({
  menu: "샴페인",
  discount: -25000,
});

const MENU = Object.freeze(
  new Map([
    [
      "에피타이저",
      Object.freeze(
        new Map([
          ["양송이수프", 6000],
          ["타파스", 5500],
          ["시저샐러드", 8000],
        ])
      ),
    ],
    [
      "메인",
      Object.freeze(
        new Map([
          ["티본스테이크", 55000],
          ["바비큐립", 54000],
          ["해산물파스타", 35000],
          ["크리스마스파스타", 25000],
        ])
      ),
    ],
    [
      "디저트",
      Object.freeze(
        new Map([
          ["초코케이크", 15000],
          ["아이스크림", 5000],
        ])
      ),
    ],
    [
      "음료",
      Object.freeze(
        new Map([
          ["제로콜라", 3000],
          ["레드와인", 60000],
          ["샴페인", 25000],
        ])
      ),
    ],
  ])
);

const BADGE = Object.freeze({
  star: "별",
  tree: "트리",
  santa: "산타",
  null: "없음",
});

const BADGE_CRITERIA = Object.freeze({
  star: -5000,
  tree: -10000,
  santa: -20000,
});

export {
  MESSAGE,
  ERROR,
  DATE,
  COST_CRITERIA,
  DISCOUNT,
  GIVEAWAY,
  MENU,
  BADGE,
  BADGE_CRITERIA,
};
