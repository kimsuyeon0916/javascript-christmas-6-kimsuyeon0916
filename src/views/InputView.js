import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../utils/Constants.js";
import Validation from "../utils/Validation.js";

const InputView = {
  async readDate() {
    const date = await this.exceptionHandler(
      MESSAGE.getDate,
      Validation.checkDate
    );
    return Number(date);
  },

  async readMenu() {
    const menu = await this.exceptionHandler(
      MESSAGE.getMenu,
      Validation.checkMenu
    );
    return menu;
  },

  async exceptionHandler(message, Validate) {
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        // eslint-disable-next-line no-await-in-loop
        const input = await Console.readLineAsync(message);
        if (message === MESSAGE.getMenu) {
          Validate(input.split(","));
          return input.split(",");
        }
        Validate(input);
        return input;
      } catch (error) {
        Console.print(error.message);
      }
    }
  },
};

export default InputView;
