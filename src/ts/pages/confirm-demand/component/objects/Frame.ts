import { FrameObject } from "../../../../interface/object/FrameObject";

export class Frame implements FrameObject {
  private hostElement: HTMLDivElement;
  private frame: HTMLDivElement;
  private messageFrame: HTMLDivElement;
  private buttonFrame: HTMLDivElement;

  get getFrame(): HTMLDivElement {
    return this.frame;
  }

  get getMessageFrame(): HTMLDivElement {
    return this.messageFrame;
  }

  get getButtonFrame(): HTMLDivElement {
    return this.buttonFrame;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.frame = document.createElement("div");
    this.frame.className = "confirm-demand-frame";

    this.messageFrame = document.createElement("div");
    this.messageFrame.className = "confirm-demand__message-frame";

    this.buttonFrame = document.createElement("div");
    this.buttonFrame.className = "confirm-demand__button-frame";

    this.frame.appendChild(this.messageFrame);
    this.frame.appendChild(this.buttonFrame);
  }

  attach = (): void => {
    this.hostElement.appendChild(this.frame);
  };

  destroy = (): void => {
    this.hostElement.removeChild(this.frame);
  };
}
