export class Frame {
  private hostElement: HTMLDivElement;
  private frame: HTMLDivElement;
  private messageFrame: HTMLDivElement;
  private buttonFrame: HTMLDivElement;

  get getFrame() {
    return this.frame;
  }

  get getMessageFrame() {
    return this.messageFrame;
  }

  get getButtonFrame() {
    return this.buttonFrame;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.frame = document.createElement("div");
    this.frame.className = "choose-truth-dare-frame";

    this.messageFrame = document.createElement("div");
    this.messageFrame.className = "choose-truth-dare__message-frame";

    this.buttonFrame = document.createElement("div");
    this.buttonFrame.className = "choose-truth-dare__button-frame";

    this.frame.appendChild(this.messageFrame);
    this.frame.appendChild(this.buttonFrame);
  }

  attach() {
    this.hostElement.appendChild(this.frame);
  }

  destroy() {
    this.hostElement.removeChild(this.frame);
  }
}
