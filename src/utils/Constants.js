const MESSAGE = Object.freeze({
  intro: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n",
  getDate:
    "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n",
  getMenu:
    "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
  preview: "에 우테코 식당에서 받을 이벤트 혜택 미리 보기!",
  menu: "<주문 메뉴>",
  cost: "<할인 전 총주문 금액>",
  giveaway: "<증정 메뉴>",
  benefit: "<혜택 내역>",
  totalbenefit: "<총혜택 금액>",
  payment: "<할인 후 예상 결제 금액>",
  badge: "<12월 이벤트 배지>",
});

const PREFIX = Object.freeze("[ERROR]");
const SUFFIX = Object.freeze("다시 입력해 주세요.");
const ERROR = Object.freeze({
  date: `${PREFIX} 유효하지 않은 날짜입니다. ${SUFFIX}`,
  menu: `${PREFIX} 유효하지 않은 주문입니다. ${SUFFIX}`,
});

const MENU = Object.freeze(
  new Map(
    [
      "에피타이저",
      Object.freeze(
        new Map(["양송이수프", 6000], ["타파스", 5500], ["시저샐러드", 8000])
      ),
    ],
    [
      "메인",
      Object.freeze(
        new Map(
          ["티본스테이크", 55000],
          ["바비큐립", 54000],
          ["해산물파스타", 35000],
          ["크리스마스파스타", 25000]
        )
      ),
    ],
    [
      "디저트",
      Object.freeze(new Map(["초코케이크", 15000], ["아이스크림", 5000])),
    ],
    [
      "음료",
      Object.freeze(
        new Map(["제로콜라", 3000], ["레드와인", 60000], ["샴페인", 25000])
      ),
    ]
  )
);

export { MESSAGE, ERROR, MENU };
