import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../utils/Constants.js";

const OutputView = {
  printOrder(date, order, cost) {
    Console.print(`12월 ${date}일에 ${MESSAGE.preview}`);
    this.printMenu(order);
    this.printCost(cost);
  },

  printBenefitResult(giveaway, benefit, totalbenefit) {
    this.printGiveaway(giveaway);
    this.printBenefit(benefit);
    this.printTotalBenefit(totalbenefit);
  },

  printEventResult(payment, badge) {
    this.printPayment(payment);
    this.printBadge(badge);
  },

  printMenu(order) {
    Console.print(MESSAGE.menu);
    order.forEach((count, menu) => {
      Console.print(`${menu} ${count}개`);
    });
  },

  printCost(cost) {
    Console.print(`${MESSAGE.cost}${cost.toLocaleString()}원`);
  },

  printGiveaway(giveaway) {
    if (giveaway.length === 0) {
      return Console.print(`${MESSAGE.giveaway}없음`);
    }
    return Console.print(`${MESSAGE.giveaway}${giveaway} 1개`);
  },

  printBenefit(benefit) {
    Console.print(MESSAGE.benefit);
    if (benefit.size === 0) {
      return Console.print(`없음`);
    }
    return benefit.forEach((value, key) => {
      Console.print(`${key}: ${value.toLocaleString()}원`);
    });
  },

  printTotalBenefit(totalbenefit) {
    Console.print(`${MESSAGE.totalbenefit}${totalbenefit.toLocaleString()}원`);
  },

  printPayment(payment) {
    Console.print(`${MESSAGE.payment}${payment.toLocaleString()}원`);
  },

  printBadge(badge) {
    Console.print(`${MESSAGE.badge}${badge}`);
  },
};

export default OutputView;
