import { Object } from "../../../../interface/object/Object";

export class Announce implements Object {
  private hostElement: HTMLDivElement;
  private label: HTMLDivElement;
  private firstMessage: HTMLParagraphElement;
  private secondMessage: HTMLParagraphElement;
  constructor(hostElement: HTMLDivElement, name: string) {
    this.hostElement = hostElement;

    this.label = document.createElement("div");
    this.label.className = "choose-card__announce-label";
    this.label.classList.add("hidden");

    this.firstMessage = document.createElement("p");
    this.firstMessage.className = "choose-card__announce-message";
    this.firstMessage.classList.add("hidden");
    this.firstMessage.innerText = `${name}さんのターンです`;

    this.secondMessage = document.createElement("p");
    this.secondMessage.className = "choose-card__announce-message";
    this.secondMessage.classList.add("hidden");
    this.secondMessage.innerText = "カードを選択してください";

    this.label.append(this.firstMessage, this.secondMessage);
  }

  attach = (): Promise<void> => {
    const fadeInLabel: () => Promise<void> = () =>
      new Promise((resolve) => {
        const fadeIn: void = this.label.classList.add("fade-in");
        setTimeout(() => resolve(fadeIn), 500);
      });

    const slideInMessage: (target: HTMLParagraphElement) => Promise<void> = (
      target: HTMLParagraphElement
    ) =>
      new Promise((resolve) => {
        const slide: void = target.classList.add("slide-in");
        setTimeout(() => resolve(slide), 600);
      });

    const slideOutMessage: (target: HTMLParagraphElement) => Promise<void> = (
      target: HTMLParagraphElement
    ) =>
      new Promise((resolve) => {
        const slide: void = target.classList.add("slide-out");
        setTimeout(() => resolve(slide), 500);
      });

    const fadeOutLabel: () => Promise<void> = () =>
      new Promise((resolve) => {
        const slide: void = this.label.classList.add("fade-out");
        setTimeout(() => {
          this.hostElement.removeChild(this.label);
          resolve(slide);
        }, 500);
      });

    return new Promise((resolve) => {
      this.hostElement.appendChild(this.label);
      const promise: Promise<void> = fadeInLabel()
        .then(() => slideInMessage(this.firstMessage))
        .then(() => slideOutMessage(this.firstMessage))
        .then(() => slideInMessage(this.secondMessage))
        .then(() => slideOutMessage(this.secondMessage))
        .then(() => {
          fadeOutLabel();
          resolve(promise);
        });
    });
  }
}
