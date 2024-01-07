import Character from "./domain";

export default class Game {
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["start"] }] */
  start() {
    console.log("game started");
  }
}

export class GameSavingData {}

export function readGameSaving() {}

export function writeGameSaving() {}
