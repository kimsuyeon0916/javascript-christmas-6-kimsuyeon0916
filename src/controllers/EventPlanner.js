import Benefit from "../models/Benefit.js";
import Discount from "../models/Discount.js";
import InputView from "../views/InputView.js";
import OutputView from "../views/OutputView.js";
import Order from "../models/Order.js";
import Event from "../models/Event.js";

const EventPlanner = {
  async plan() {
    const date = await InputView.readDate();
    const menu = await InputView.readMenu();

    const [orderResult, cost] = this.applyOrder(date, menu);
    const [totalDiscount, totalBenefit] = this.applyBenefit(
      date,
      orderResult,
      cost
    );
    this.applyEvent(cost, totalDiscount, totalBenefit);
  },

  applyOrder(date, menu) {
    const order = new Order();

    const orderResult = order.calculateOrder(menu);
    const cost = order.calculateCost();

    OutputView.printOrder(date, orderResult, cost);

    return [orderResult, cost];
  },

  applyBenefit(date, order, cost) {
    const discount = new Discount();
    const benefit = new Benefit();

    const discountResult = discount.calculateDiscount(date, order);
    const totalDiscount = discount.calculateTotalDiscount();

    const [benefitResult, giveaway] = benefit.calculateBenefit(
      discountResult,
      cost
    );
    const totalBenefit = benefit.calculateTotalBenefit();

    OutputView.printBenefitResult(giveaway, benefitResult, totalBenefit);

    return [totalDiscount, totalBenefit];
  },

  applyEvent(cost, totalDiscount, totalBenefit) {
    const event = new Event();

    const payment = event.calculatePayment(cost, totalDiscount);
    const badge = event.giveBadge(totalBenefit);

    OutputView.printEventResult(payment, badge);
  },
};

export default EventPlanner;
