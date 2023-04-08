import { Object } from "../../../../interface/object/Object";
import { truthDare } from "../../../../strage/truthDare";

export class Button implements Object {
  private hostElement: HTMLDivElement;
  private button: HTMLButtonElement;

  get getButton(): HTMLButtonElement {
    return this.button;
  }

  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.button = document.createElement("button");
    this.button.className = "choose-demand__button";
    try {
      switch (truthDare.getChooseContent) {
        case "truth":
          this.button.classList.add("truth");
          this.button.innerText = "この真実を指示する";
          break;
        case "dare":
          this.button.classList.add("dare");
          this.button.innerText = "この挑戦を指示する";
          break;
        default:
          throw new Error("無効な値が指定されました");
      }
    } catch (e) {
      console.error("エラー:", e);
    }
    this.button.classList.add("hidden");
    this.button.classList.add("disable");
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.button);
      const fadeIn: void = this.button.classList.add("fade-in");
      this.button.addEventListener(
        "animationend",
        () => {
          this.button.classList.remove("hidden");
          this.button.classList.remove("fade-in");
        },
        {
          once: true,
        }
      );
      setTimeout(() => {
        resolve(fadeIn);
      }, 1000);
    });
}
