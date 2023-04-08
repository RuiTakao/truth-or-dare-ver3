import { Object } from "../../../../interface/object/Object";

export class Button implements Object {
  private hostElement: HTMLDivElement;
  private button: HTMLButtonElement;

  get getButton(): HTMLButtonElement {
    return this.button;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;
    this.button = document.createElement("button");
    this.button.className = "enter-name__button";
    this.button.innerText = "クリック";
    this.button.classList.add("hidden");
    this.button.classList.add("disable");
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.button);
      const fadeIn = this.button.classList.add("fade-in");
      this.button.addEventListener("animationend", () => {
        this.button.classList.remove("hidden");
        this.button.classList.remove("fade-in");
      });
      setTimeout(() => resolve(fadeIn), 200);
    });

  fadeOut = (): Promise<void> =>
    new Promise((resolve) => {
      const fadeOut = this.button.classList.add("fade-out");
      resolve(fadeOut);
    });

  disable = (): void => this.button.classList.add("disable");

  enable = (): void => this.button.classList.remove("disable");
}
