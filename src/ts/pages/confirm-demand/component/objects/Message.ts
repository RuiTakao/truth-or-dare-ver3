import { Object } from "../../../../interface/Object";
import { loseUser, winUser } from "../../../../strage/user";

export class Message implements Object {
  private hostElement: HTMLDivElement;
  private message: HTMLDivElement;
  private oneLineMessage: HTMLParagraphElement;
  private twoLineMessage: HTMLParagraphElement;
  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.message = document.createElement("div");
    this.message.className = "confirm-demand__message";

    this.oneLineMessage = document.createElement("p");
    this.oneLineMessage.className = "confirm-demand__one-line-message";
    this.oneLineMessage.classList.add("hidden");

    this.twoLineMessage = document.createElement("p");
    this.twoLineMessage.className = "confirm-demand__two-line-message";
    this.twoLineMessage.classList.add("hidden");

    this.message.append(this.oneLineMessage, this.twoLineMessage);

    try {
      if (winUser.getName !== null && loseUser.getName !== null) {
        this.oneLineMessage.innerHTML = `${loseUser.getName}さん`;
        this.twoLineMessage.innerText = `${winUser.getName}さんからの指示です`;
      } else throw new Error("名前が設定されていません");
    } catch (e) {
      console.error("エラー：", e);
    }
  }

  attach(): Promise<void> {
    return new Promise((resolve) => {
      this.hostElement.appendChild(this.message);

      new Promise((resolve) => {
        const fadeIn = this.oneLineMessage.classList.add("fade-in");
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
        const fadeIn = this.twoLineMessage.classList.add("fade-in");
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
}
