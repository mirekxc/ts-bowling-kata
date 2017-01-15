import { Frame } from './Frame';

export class BowlingGame {
  public static FRAMES_COUNT: number = 10;
  private rolls: Array<number> = [];

  public roll(pins: number): void {
    this.rolls.push(pins);
  }

  public score(): number {
    let score: number = 0;
    let frames: Array<Frame> = this.getFrames();

    if (frames.length < BowlingGame.FRAMES_COUNT) {
      throw new Error('Game is not finished!');
    }

    return frames
      .map(frame => frame.getFrameScore())
      .reduce((prev: number, current: number) => prev + current);
  }

  private getFrames(): Array<Frame> {
    let frames: Array<Frame> = [];

    for (let rollIndex = 0; rollIndex < this.rolls.length; rollIndex++) {
      let frame: Frame;

      if (this.rolls[rollIndex] === Frame.MAX_SCORE) {
        frame = new Frame(Frame.MAX_SCORE);
      } else {
        frame = new Frame(this.rolls[rollIndex], this.rolls[rollIndex + 1]);
        rollIndex++;
      }

      this.addBonusRolls(frame, rollIndex + 1);
      frames.push(frame);

      if (frames.length === BowlingGame.FRAMES_COUNT || !frame.isFinished()) {
        break;
      }
    }

    return frames;
  }

  private addBonusRolls(frame: Frame, rollndex: number): void {
    let bonusRollsCount: number = frame.getBonusRollsCount();
    frame.setBonusRolls(this.rolls.slice(rollndex, rollndex + bonusRollsCount));
  }

}
