import { FrameObject } from "../../../../interface/object/FrameObject";

export class Frame implements FrameObject {
  private hostElement: HTMLDivElement;
  private frame: HTMLDivElement;
  private messageFrame: HTMLDivElement;
  private selectFrame: HTMLDivElement;
  private buttonFrame: HTMLDivElement;

  get getFrame(): HTMLDivElement {
    return this.frame;
  }

  get getMessageFrame(): HTMLDivElement {
    return this.messageFrame;
  }

  get getSelectFrame(): HTMLDivElement {
    return this.selectFrame;
  }

  get getButtonFrame(): HTMLDivElement {
    return this.buttonFrame;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.frame = document.createElement("div");
    this.frame.className = "choose-demand-frame";

    this.messageFrame = document.createElement("div");
    this.messageFrame.className = "choose-demand__message-frame";

    this.selectFrame = document.createElement("div");
    this.selectFrame.className = "choose-demand__select-frame";

    this.buttonFrame = document.createElement("div");
    this.buttonFrame.className = "choose-demand__button-frame";

    this.frame.appendChild(this.messageFrame);
    this.frame.appendChild(this.selectFrame);
    this.frame.appendChild(this.buttonFrame);
  }

  attach = (): void => {
    this.hostElement.appendChild(this.frame);
  }

  destroy = (): void => {
    this.hostElement.removeChild(this.frame);
  }
}
