import { BowlingGame } from "./../src/BowlingGame";

describe("BowlingGame", () => {
    let game: BowlingGame = null;

    beforeEach(() => {
        game = new BowlingGame();
    });

    it ('handle gutter game', () => {
        repeatRoll(20, 0);
        expect(game.score()).toBe(0);
    });

    it ('handle all ones', () => {
        repeatRoll(20, 1);
        expect(game.score()).toBe(20);
    });

    it ('handle spare throw', () => {
        rollSpare();
        game.roll(3);
        repeatRoll(17, 0);

        expect(game.score()).toBe(16);
    });

    it ('handle strike throw', () => {
        rollStrike();
        game.roll(3)
        game.roll(4)
        repeatRoll(16, 0);

        expect(game.score()).toBe(24);
    });

    it ('handle perfect game', () => {
        repeatRoll(20, 10);
        expect(game.score()).toBe(300);
    });

    it ('handle turkey\'s pinfall', () => {
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(0);
        game.roll(9);
        repeatRoll(14, 0);
        expect(game.score()).toBe(78);
    });

    function rollStrike() {
        game.roll(10);
    }

    function rollSpare() {
        game.roll(5);
        game.roll(5);
    }

    function repeatRoll(rollsCount: number, pins: number) {
        for (let i = 0; i < rollsCount; i++) {
            game.roll(pins);
        }
    }

});
