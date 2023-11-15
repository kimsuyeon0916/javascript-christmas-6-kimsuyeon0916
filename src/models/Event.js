import { BADGE, BADGE_CRITERIA } from "../utils/Constants.js";

class Event {
  #badge;

  #payment;

  constructor() {
    this.#badge = BADGE.null;
  }

  calculatePayment(cost, totalDiscount) {
    this.#payment = cost + totalDiscount;

    return this.#payment;
  }

  giveBadge(totalBenefit) {
    if (totalBenefit <= BADGE_CRITERIA.star) {
      this.#badge = BADGE.star;
    }
    if (totalBenefit <= BADGE_CRITERIA.tree) {
      this.#badge = BADGE.tree;
    }
    if (totalBenefit <= BADGE_CRITERIA.santa) {
      this.#badge = BADGE.santa;
    }

    return this.#badge;
  }
}

export default Event;
