import { MENU } from "../utils/Constants.js";

class Order {
  #order;

  constructor() {
    this.#order = new Map();
  }

  calculateCost() {
    const totalMenu = new Map(
      Array.from(MENU.values())
        .map((menuList) => Array.from(menuList))
        .flat()
    );

    return Array.from(this.#order).reduce(
      (cost, [menu, count]) => cost + totalMenu.get(menu) * count,
      0
    );
  }

  calculateOrder(orderList) {
    orderList.forEach((order) => {
      const [menu, count] = order.split("-");
      this.#order.set(menu, count);
    });

    return this.#order;
  }
}

export default Order;
