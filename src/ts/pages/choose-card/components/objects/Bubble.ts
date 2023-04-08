import { Object } from "../../../../interface/object/Object";

export class Bubble implements Object {
  private hostElement: HTMLDivElement;
  private bubble: HTMLDivElement;
  private bubbleButton: HTMLDivElement;
  private message: HTMLParagraphElement;
  private yesButton: HTMLButtonElement;
  private noButton: HTMLButtonElement;
  private userName: string;

  get getYesButton(): HTMLButtonElement {
    return this.yesButton;
  }

  get getNoButton(): HTMLButtonElement {
    return this.noButton;
  }

  constructor(hostElement: HTMLDivElement, userName: string) {
    this.userName = userName;
    this.hostElement = hostElement;

    this.bubble = document.createElement("div");
    this.bubble.className = "choose-card__bubble";
    this.bubble.classList.add("hidden");

    this.bubbleButton = document.createElement("div");
    this.bubbleButton.className = "choose-card__bubble-button";
    this.bubbleButton.style.display = "none";

    this.message = document.createElement("p");
    this.message.className = "choose-card__bubble-message";
    this.message.style.display = "block";

    this.yesButton = document.createElement("button");
    this.yesButton.className = "choose-card__bubble-button-yes";
    this.yesButton.innerText = "はい";

    this.noButton = document.createElement("button");
    this.noButton.className = "choose-card__bubble-button-no";
    this.noButton.innerText = "いいえ";

    const body: HTMLDivElement = document.createElement("div");
    body.className = "choose-card__bubble-body";

    const arrow: HTMLDivElement = document.createElement("div");
    arrow.className = "choose-card__bubble-arrow";

    const arrowShadow: HTMLDivElement = document.createElement("div");
    arrowShadow.className = "choose-card__bubble-arrow-shadow";

    const buttonMessage: HTMLParagraphElement = document.createElement("p");
    buttonMessage.className = "choose-card__bubble-button-message";
    buttonMessage.innerText = "これにしますか？";

    const buttonList: HTMLDivElement = document.createElement("div");
    buttonList.className = "choose-card__bubble-button-list";

    buttonList.append(this.yesButton, this.noButton);

    this.bubbleButton.append(buttonMessage, buttonList);

    this.bubble.append(
      body,
      arrow,
      arrowShadow,
      this.message,
      this.bubbleButton
    );
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.message.innerText = `${this.userName}さんのターンです\nカードを選んでください`;
      this.hostElement.appendChild(this.bubble);
      const fadeIn = this.bubble.classList.add("fade-in");
      this.bubble.addEventListener(
        "animationend",
        () => {
          this.bubble.classList.remove("hidden");
          this.bubble.classList.remove("fade-in");
        },
        { once: true }
      );
      setTimeout(() => resolve(fadeIn));
    });

  openBubbleButton = (): void => {
    this.vibe();
    if (this.bubbleButton.style.display === "none") {
      this.message.style.display = "none";
      this.bubbleButton.style.display = "block";
    }
  };

  closeBubbleButton = (): void => {
    this.vibe();
    if (this.message.style.display === "none") {
      this.bubbleButton.style.display = "none";
      this.message.style.display = "block";
    }
  };

  destroy = (): void => {
    this.hostElement.removeChild(this.bubble);
  };

  private vibe = (): void => {
    const right = (): Promise<void> =>
      new Promise((resolve) => {
        const right = this.bubble.classList.add("right-rotate");
        setTimeout(() => resolve(right), 100);
      });

    const left = (): Promise<void> =>
      new Promise((resolve) => {
        this.bubble.classList.remove("right-rotate");
        const left = this.bubble.classList.add("left-rotate");
        setTimeout(() => resolve(left), 100);
      });

    right()
      .then(() => left())
      .then(() => this.bubble.classList.remove("left-rotate"));
  };
}
