import { ERROR, DATE, MENU } from "./Constants.js";

const Validation = {
  checkDate(date) {
    this.checkNull(date, ERROR.date);
    this.checkBlank(date, ERROR.date);
    this.checkChar(date, ERROR.date);
    this.checkOutOfRange(date, ERROR.date);
  },

  checkMenu(orderList) {
    this.checkNull(orderList, ERROR.menu);

    orderList.forEach((order) => {
      const [menu, count] = order.split("-");
      this.checkEmpty(order, ERROR.menu);
      this.checkWrong(menu, ERROR.menu);
      this.checkEmpty(count, ERROR.menu);
      this.checkBlank(count, ERROR.menu);
      this.checkChar(count, ERROR.menu);
      this.checkZero(count, ERROR.menu);
    });

    this.checkCaution(orderList);
  },

  checkCaution(orderList) {
    const menuList = orderList.map((order) => order.split("-")[0]);
    const totalCount = orderList.reduce(
      (total, order) => total + Number(order.split("-")[1]),
      0
    );
    this.checkDrinksOnly(menuList, ERROR.menu);
    this.checkMany(totalCount, ERROR.menu);
  },

  checkNull(number, message) {
    if (number.length === 0) {
      throw new Error(message);
    }
  },

  checkBlank(number, message) {
    if (number.replaceAll(" ", "").length !== number.length) {
      throw new Error(message);
    }
  },

  checkChar(number, message) {
    if (Number.isNaN(Number(number))) {
      throw new Error(message);
    }
  },

  checkOutOfRange(number, message) {
    if (number < DATE.start || number > DATE.end) {
      throw new Error(message);
    }
  },

  checkEmpty(input, message) {
    if (input === "") {
      throw new Error(message);
    }
  },

  checkWrong(menu, message) {
    const totalMenu = new Map(
      Array.from(MENU.values())
        .map((menuList) => Array.from(menuList))
        .flat()
    );

    if (!totalMenu.has(menu)) {
      throw new Error(message);
    }
  },

  checkZero(number, message) {
    if (Number(number) === 0) {
      throw new Error(message);
    }
  },

  checkDrinksOnly(menuList, message) {
    const drink = Array.from(MENU.get("음료").keys());
    const drinkCount = menuList.filter((menu) => drink.includes(menu)).length;

    if (drinkCount === menuList.length) {
      throw new Error(message);
    }
  },

  checkMany(number, message) {
    if (Number(number) > 20) {
      throw new Error(message);
    }
  },
};

export default Validation;
