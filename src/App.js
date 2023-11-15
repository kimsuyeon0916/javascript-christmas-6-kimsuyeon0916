import EventPlanner from "./controllers/EventPlanner.js";

class App {
  // eslint-disable-next-line class-methods-use-this
  async run() {
    await EventPlanner.plan();
  }
}

export default App;
