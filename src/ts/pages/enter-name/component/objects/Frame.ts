import { FrameObject } from "../../../../interface/object/FrameObject";

export class Frame implements FrameObject {
  private hostElement: HTMLDivElement;
  private frame: HTMLDivElement;
  private bubbleFrame: HTMLDivElement;
  private inputFrame: HTMLDivElement;
  private buttonFrame: HTMLDivElement;

  get getFrame(): HTMLDivElement {
    return this.frame;
  }

  get getBubbleFrame(): HTMLDivElement {
    return this.bubbleFrame;
  }

  get getInputFrame(): HTMLDivElement {
    return this.inputFrame;
  }

  get getButtonFrame(): HTMLDivElement {
    return this.buttonFrame;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;
    this.frame = document.createElement("div");
    this.frame.className = "enter-name-frame";

    this.bubbleFrame = document.createElement("div");
    this.bubbleFrame.className = "enter-name__bubble-frame";

    this.inputFrame = document.createElement("div");
    this.inputFrame.className = "enter-name__input-frame";

    this.buttonFrame = document.createElement("div");
    this.buttonFrame.className = "enter-name__button-frame";

    this.frame.append(this.bubbleFrame, this.inputFrame, this.buttonFrame);
  }

  attach = (): void => {
    this.hostElement.appendChild(this.frame);
  };

  destroy = (): void => {
    this.hostElement.removeChild(this.frame);
  };
}
