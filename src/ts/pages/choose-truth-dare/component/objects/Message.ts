import { loseUser } from "../../../../strage/user";

export class Message {
  private hostElement: HTMLDivElement;
  private message: HTMLDivElement;
  private oneLineMessage: HTMLParagraphElement;
  private twoLineMessage: HTMLParagraphElement;
  constructor(hostElement: HTMLDivElement) {
    this.hostElement = hostElement;

    this.message = document.createElement("div");
    this.message.className = "choose-truth-dare__message";

    this.oneLineMessage = document.createElement("p");
    this.oneLineMessage.className = "choose-truth-dare__one-line-message";

    this.oneLineMessage.classList.add("hidden");

    this.twoLineMessage = document.createElement("p");
    this.twoLineMessage.className = "choose-truth-dare__two-line-message";
    this.twoLineMessage.innerHTML =
      "<span class='truth'>真実</span>か<span class='dare'>挑戦</span>を選んでください";
    this.twoLineMessage.classList.add("hidden");

    this.message.appendChild(this.oneLineMessage);
    this.message.appendChild(this.twoLineMessage);

    try {
      if (loseUser.getName !== null) {
        this.oneLineMessage.innerHTML = `${loseUser.getName}さん`;
      } else {
        throw new Error("名前が設定されていません");
      }
    } catch (e) {
      console.error("エラー：", e);
    }
  }

  attach() {
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
