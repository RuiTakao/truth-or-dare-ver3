import { Object } from "../../../../interface/object/Object";

export class Message implements Object {
  private hostElement: HTMLDivElement;
  private message: HTMLDivElement;
  private title: HTMLParagraphElement;
  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.message = document.createElement("div");
    this.message.className = "end-game__message";
    this.message.classList.add("hidden");

    this.title = document.createElement("p");
    this.title.className = "end-game__title";
    this.title.innerText = "ゲーム終了";

    this.message.appendChild(this.title);
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.message);

      const fadeIn = this.message.classList.add("fade-in");
      this.message.addEventListener(
        "animationend",
        () => {
          this.message.classList.remove("hidden");
          this.message.classList.remove("fade-in");
        },
        { once: true }
      );

      setTimeout(() => resolve(fadeIn), 500);
    });
}
