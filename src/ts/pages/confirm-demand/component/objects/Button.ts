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
    this.button.className = "confirm-demand__button";
    this.button.innerText = "指示を確認する";
    this.button.classList.add("hidden");
    this.button.classList.add("disable");

    try {
      switch (truthDare.getChooseContent) {
        case "truth":
          this.button.classList.add("truth");
          break;
        case "dare":
          this.button.classList.add("dare");
          break;
        default:
          throw new Error("無効な値が指定されました");
      }
    } catch (e) {
      console.error("エラー:", e);
    }
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
        this.button.classList.remove("disable");
        resolve(fadeIn);
      }, 1000);
    });
}
