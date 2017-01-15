export class Frame {
  public static MAX_SCORE: number = 10;
  private bonusRolls: Array<number> = [];

  constructor (
    private firstRoll: number,
    private secondRoll?: number
  ) {}

  public getBonusRollsCount(): number {
    if (this.isSpare()) {
      return 1;
    }

    if (this.isStrike()) {
      return 2;
    }

    return 0;
  }

  public setBonusRolls(rolls: Array<number>): void {
    this.bonusRolls = rolls.filter(roll => undefined !== roll);
  }

  public getBonusRolls(rolls: Array<number>): Array<number> {
    return this.bonusRolls;
  }

  public isFinished(): boolean {
    if (this.bonusRolls.length !== this.getBonusRollsCount()) {
      return false;
    }

    return this.isStrike() || this.hasTwoRolls();
  }

  public getFirstRoll(): number {
    return this.firstRoll;
  }

  public getSecondRoll(): number {
    if (undefined === this.secondRoll) {
      return 0;
    }

    return this.secondRoll;
  }

  public getFrameScore(): number {
    if (!this.isFinished()) {
      return 0;
    }

    return this.getFirstRoll() + this.getSecondRoll() + this.getBonusPoints();
  }

  public isSpare(): boolean {
    let rollsSum: number = this.getFirstRoll() + this.getSecondRoll();
    return rollsSum === Frame.MAX_SCORE && !this.isStrike();
  }

  public isStrike(): boolean {
    return this.getFirstRoll() === Frame.MAX_SCORE;
  }

  private hasTwoRolls(): boolean {
    return undefined !== this.secondRoll;
  }

  private getBonusPoints(): number {
    if (0 === this.bonusRolls.length) {
      return 0;
    }

    return this.bonusRolls.reduce(
        (prev: number, current: number) => prev + current
      );
  }
}
