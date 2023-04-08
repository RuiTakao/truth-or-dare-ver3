import { Object } from "../../../../interface/object/Object";
import { truthDare } from "../../../../strage/truthDare";
import { winUser } from "../../../../strage/user";

export class Message implements Object {
  private hostElement: HTMLDivElement;
  private message: HTMLDivElement;
  private oneLineMessage: HTMLParagraphElement;
  private twoLineMessage: HTMLParagraphElement;
  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.message = document.createElement("div");
    this.message.className = "confirm-truth-dare__message";

    this.oneLineMessage = document.createElement("p");
    this.oneLineMessage.className = "confirm-truth-dare__one-line-message";

    this.oneLineMessage.classList.add("hidden");

    this.twoLineMessage = document.createElement("p");
    this.twoLineMessage.className = "confirm-truth-dare__two-line-message";

    this.twoLineMessage.classList.add("hidden");

    this.message.append(this.oneLineMessage, this.twoLineMessage);

    try {
      switch (truthDare.getChooseContent) {
        case "truth":
          this.twoLineMessage.innerHTML =
            "<span class='truth'>真実</span>が選ばれました";
          break;
        case "dare":
          this.twoLineMessage.innerHTML =
            "<span class='dare'>挑戦</span>が選ばれました";
          break;
        default:
          throw new Error("無効な値が指定されました");
      }

      if (winUser.getName !== null)
        this.oneLineMessage.innerHTML = `${winUser.getName}さん`;
      else throw new Error("名前が設定されていません");
    } catch (e) {
      console.error("エラー:", e);
    }
  }

  attach = (): Promise<void> =>
    new Promise((resolve) => {
      this.hostElement.appendChild(this.message);

      new Promise((resolve) => {
        const fadeIn: void = this.oneLineMessage.classList.add("fade-in");
        this.oneLineMessage.addEventListener(
          "animationend",
          () => {
            this.oneLineMessage.classList.remove("hidden");
            this.oneLineMessage.classList.remove("fade-in");
          },
          { once: true }
        );
        setTimeout(() => resolve(fadeIn), 750);
      }).then(() => {
        const fadeIn: void = this.twoLineMessage.classList.add("fade-in");
        this.twoLineMessage.addEventListener(
          "animationend",
          () => {
            this.twoLineMessage.classList.remove("hidden");
            this.twoLineMessage.classList.remove("fade-in");
          },
          { once: true }
        );
        setTimeout(() => resolve(fadeIn), 750);
      });
    });
}
