import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../utils/Constants.js";
import Validation from "../utils/Validation.js";

const InputView = {
  async readDate() {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const date = await Console.readLineAsync(MESSAGE.getDate);
        Validation.checkDate(date);
        return Number(date);
      } catch (error) {
        Console.print(error.message);
      }
    }
  },

  async readMenu() {
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const menu = (await Console.readLineAsync(MESSAGE.getMenu)).split(",");
        Validation.checkMenu(menu);
        return menu;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
};

export default InputView;
