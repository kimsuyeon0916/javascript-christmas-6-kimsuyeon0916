import { COST_CRITERIA } from "../utils/Constants.js";

class Benefit {
  #benefit;

  #giveaway = "";

  constructor() {
    this.#benefit = new Map();
  }

  calculateTotalBenefit() {
    return Array.from(this.#benefit.values()).reduce(
      (total, cost) => total + cost,
      0
    );
  }

  calculateBenefit(discount, cost) {
    if (cost >= COST_CRITERIA.discount) {
      this.#benefit = discount;
      this.calculateGiveaway(cost);
    }

    return [this.#benefit, this.#giveaway];
  }

  calculateGiveaway(cost) {
    if (cost >= COST_CRITERIA.giveaway) {
      this.#benefit.set("증정 이벤트", -25000);
      this.#giveaway = "샴페인";
    }
  }
}

export default Benefit;
