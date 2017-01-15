import { Frame } from "./../src/Frame";

describe("Frame", () => {

  it ('should be strike frame', () => {
    let frame: Frame = new Frame(10);
    expect(frame.isStrike()).toBe(true);
  });

  it ('should be spare frame', () => {
    let frame: Frame = new Frame(3, 7);
    expect(frame.isSpare()).toBe(true);
  });

  it ('should sum results from frame rolls', () => {
    let frame: Frame = new Frame(3, 6);
    expect(frame.getFrameScore()).toBe(9);
  });

  it ('should sum bonus spare rolls', () => {
    let frame: Frame = new Frame(4, 6);
    frame.setBonusRolls([7]);
    expect(frame.getFrameScore()).toBe(17);
  });

  it ('should sum bonus strike rolls', () => {
    let frame: Frame = new Frame(10);
    frame.setBonusRolls([7, 3]);
    expect(frame.getFrameScore()).toBe(20);
  });

  it ('should check if regular frame is finished', () => {
    let frame: Frame = new Frame(2, 5);
    expect(frame.isFinished()).toBe(true);
  });

  it ('should check if spare frame is finished', () => {
    let frame: Frame = new Frame(2, 8);
    frame.setBonusRolls([6]);
    expect(frame.isFinished()).toBe(true);
  });

  it ('should check if strike frame is finished', () => {
    let frame: Frame = new Frame(10);
    frame.setBonusRolls([1, 2]);
    expect(frame.isFinished()).toBe(true);
  });

});
