import { BowlingGame } from "./../src/BowlingGame";

describe("BowlingGame", () => {

  let game: BowlingGame;

  beforeEach(() => {
    game = new BowlingGame();
  });

  it ('should sum results from null point throws', () => {
    repeatThrows(20, 0);
    expect(game.score()).toBe(0);
  });

  it ('should sum results form one point throws', () => {
    repeatThrows(20, 1);
    expect(game.score()).toBe(20);
  });

  it ('should double points from next throw after spare throw', () => {
    throwSpare();
    game.roll(3);
    game.roll(2);

    repeatThrows(16, 0);

    expect(game.score()).toBe(18);
  });

  it ('should double points from next two throws after strike throw', () => {
    throwStrike();
    game.roll(3);
    game.roll(2);

    repeatThrows(16, 0);

    expect(game.score()).toBe(20);
  });

  it ('should sum results from game with only stirke throws', () => {
    repeatThrows(12, 10);

    expect(game.score()).toBe(300);
  });

  it ('should sum results random points and random bonuses', () => {
    game.roll(10);
    game.roll(9);
    game.roll(1);
    game.roll(5);
    game.roll(5);
    game.roll(7);
    game.roll(2);
    game.roll(10);
    game.roll(10);
    game.roll(10);
    game.roll(9);
    game.roll(0);
    game.roll(8);
    game.roll(2);
    game.roll(9);
    game.roll(1);
    game.roll(10);

    expect(game.score()).toBe(187);
  });

  xit ('should handle strike throw after null throw', () => {
    game.roll(0);
    game.roll(10);
    game.roll(5);

    expect(game.score()).toBe(20);
  });

  function throwStrike() {
    game.roll(10);
  }

  function throwSpare() {
    game.roll(3);
    game.roll(7);
  }

  function repeatThrows(repeatCount: number, pins: number) {
    for (let i = 0; i < repeatCount; i++) {
      game.roll(pins);
    }
  }

});
