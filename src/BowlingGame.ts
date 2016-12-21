export class BowlingGame {
  private rolls: Array<number> = [];

  public roll(pins: number): void {
    this.rolls.push(pins);
  }

  public score(): number {
    let score: number = 0;
    let throwIndex: number = 0;

    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(throwIndex)) {
        score += 10 + this.strikeBonus(throwIndex);
        throwIndex++;

        continue;
      }

      if (this.isSpare(throwIndex)) {
        score += 10 + this.spareBonus(throwIndex);
        throwIndex += 2;

        continue;
      }

      score += this.sumPointsFromFrame(throwIndex);
      throwIndex += 2;
    }

    return score;
  }

  private strikeBonus(throwIndex: number): number {
    return this.rolls[throwIndex+1] + this.rolls[throwIndex+2];
  }

  private spareBonus(throwIndex: number): number {
    return this.rolls[throwIndex+2];
  }

  private sumPointsFromFrame(throwIndex: number): number {
    return this.rolls[throwIndex] + this.rolls[throwIndex+1];
  }

  private isStrike(throwIndex: number): boolean {
    return this.rolls[throwIndex] === 10;
  }

  private isSpare(throwIndex: number): boolean {
    return this.rolls[throwIndex] + this.rolls[throwIndex+1] === 10;
  }

}
