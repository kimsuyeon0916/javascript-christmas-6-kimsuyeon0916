import { DATE, DISCOUNT, MENU } from "../utils/Constants.js";

class Discount {
  #discount;

  constructor() {
    this.#discount = new Map();
  }

  calculateTotalDiscount() {
    return Array.from(this.#discount.values()).reduce(
      (total, cost) => total + cost,
      0
    );
  }

  calculateDiscount(date, order) {
    this.#christmasDiscount(date);
    this.#weekdayDiscount(date, order);
    this.#weekendDiscount(date, order);
    this.#specialDiscount(date);

    return this.#discount;
  }

  #christmasDiscount(date) {
    if (date <= DATE.christmas) {
      const amount = DISCOUNT.unit + (date - 1) * DISCOUNT.increase;

      if (amount !== 0) {
        this.#discount.set("크리스마스 디데이 할인", amount);
      }
    }
  }

  #weekdayDiscount(date, order) {
    if (DATE.weekday.includes(date)) {
      const dessert = Array.from(MENU.get("디저트").keys());
      const dessertOrder = Array.from(order).filter(([menu]) =>
        dessert.includes(menu)
      );
      const count = dessertOrder.reduce((sum, [, number]) => sum + number, 0);
      const amount = count * DISCOUNT.year;

      if (amount !== 0) {
        this.#discount.set("평일 할인", amount);
      }
    }
  }

  #weekendDiscount(date, order) {
    if (DATE.weekend.includes(date)) {
      const main = Array.from(MENU.get("메인").keys());
      const mainOrder = Array.from(order).filter(([menu]) =>
        main.includes(menu)
      );
      const count = mainOrder.reduce((sum, [, number]) => sum + number, 0);
      const amount = count * DISCOUNT.year;

      if (amount !== 0) {
        this.#discount.set("주말 할인", amount);
      }
    }
  }

  #specialDiscount(date) {
    if (DATE.special.includes(date)) {
      this.#discount.set("특별 할인", DISCOUNT.unit);
    }
  }
}

export default Discount;
