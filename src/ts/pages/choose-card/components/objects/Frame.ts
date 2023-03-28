import { FrameObject } from "../../../../interface/FrameObject";

export class Frame implements FrameObject {
  private hostElement: HTMLDivElement;
  private frame: HTMLDivElement;
  private bubbleFrame: HTMLDivElement;
  private cardListFrame: HTMLDivElement;

  get getFrame() {
    return this.frame;
  }

  get getBubbleFrame() {
    return this.bubbleFrame;
  }

  get getCardListFrame() {
    return this.cardListFrame;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;
    this.frame = document.createElement("div");
    this.frame.className = "choose-card-frame";

    this.bubbleFrame = document.createElement("div");
    this.bubbleFrame.className = "choose-card__bubble-frame";

    this.cardListFrame = document.createElement("div");
    this.cardListFrame.className = "choose-card__card-list-frame";

    this.frame.append(this.bubbleFrame, this.cardListFrame);
  }

  attach() {
    this.hostElement.appendChild(this.frame);
  }

  destroy(): void {}
}
