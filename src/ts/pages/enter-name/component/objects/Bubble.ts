import { Object } from "../../../../interface/object/Object";

export class Bubble implements Object {
  private hostElement: HTMLDivElement;
  private bubble: HTMLDivElement;
  private movingBubble: HTMLDivElement;
  private message: HTMLParagraphElement;

  get getBubble(): HTMLDivElement {
    return this.bubble;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;
    this.bubble = document.createElement("div");
    this.bubble.className = "enter-name__bubble";
    this.bubble.classList.add("hidden");

    this.movingBubble = document.createElement("div");
    this.movingBubble.className = "enter-name__bubble-moving";

    const body: HTMLDivElement = document.createElement("div");
    body.className = "enter-name__bubble-body";

    const arrow: HTMLDivElement = document.createElement("div");
    arrow.className = "enter-name__bubble-arrow";

    const arrowShadow: HTMLDivElement = document.createElement("div");
    arrowShadow.className = "enter-name__bubble-arrow-shadow";

    this.message = document.createElement("p");
    this.message.className = "enter-name__bubble-message";

    this.movingBubble.append(body, arrow, arrowShadow, this.message);

    this.bubble.appendChild(this.movingBubble);
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.bubble);
      this.message.innerText =
        "対戦者名が表示されるよ\n1人目のプレーヤー名を入力して\nクリックしてね！";
      this.message.classList.add("three-line");
      const fadeIn: void = this.bubble.classList.add("fade-in");
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

  change = (): Promise<void> =>
    new Promise((resolve) => {
      const fadeOut: void = this.bubble.classList.add("fade-out");
      this.bubble.addEventListener(
        "animationend",
        () => {
          this.message.innerText =
            "2人目のプレイヤー名を入力して\nクリックしてね！";
          this.message.classList.remove("three-line");
          this.message.classList.add("two-line");
          this.bubble.classList.add("fade-in");
          this.bubble.addEventListener(
            "animationend",
            () => {
              this.bubble.classList.remove("fade-out");
              this.bubble.classList.remove("fade-in");
            },
            { once: true }
          );
        },
        { once: true }
      );
      resolve(fadeOut);
    });

  fadeOut = (): Promise<void> =>
    new Promise((resolve) => {
      const fadeOut: void = this.bubble.classList.add("fade-out");
      resolve(fadeOut);
    });
}
